(ns app.app
  (:require [keechma.next.controllers.router]
            [keechma.next.controllers.subscription]
            [keechma.next.controllers.entitydb]
            [keechma.next.controllers.dataloader]
            [app.controllers.jwt]
            [app.controllers.tags]
            [app.controllers.articles]
            [app.controllers.article]
            [app.controllers.current-user]
            [app.controllers.profile-user]
            [app.controllers.comments]
            [app.controllers.guest.user-actions]
            [app.controllers.guest.login-form]
            [app.controllers.guest.register-form]
            [app.controllers.user.settings-form]
            [app.controllers.user.user-actions]
            [app.controllers.user.editor-form]
            [app.controllers.user.comment-form]
            ["react-dom" :as rdom]))

(defn page-eq? [page] (fn [{:keys [router]}] (= page (:page router))))

(defn role-eq? [role] (fn [deps] (= role (:role deps))))

(def homepage? (page-eq? "home"))
(def profile? (page-eq? "profile"))

(defn slug [{:keys [router]}] (:slug router))

(def app
  {:keechma.subscriptions/batcher rdom/unstable_batchedUpdates,
   :keechma/controllers
     {:router #:keechma.controller{:params true,
                                   :type :keechma/router,
                                   :keechma/routes
                                     [["" {:page "home"}] ":page"
                                      ":page/:subpage" ":page/:subpage/:detail"
                                      ["profile/:user"
                                       {:page "profile", :detail "author"}]
                                      ["profile/:user/:detail"
                                       {:page "profile"}]
                                      ["article/:slug" {:page "article"}]
                                      ["editor/:slug" {:page "editor"}]
                                      ["tag/:tag" {:page "home"}]]},
      :dataloader #:keechma.controller{:params true, :type :keechma/dataloader},
      :entitydb
        #:keechma.controller{:params true,
                             :type :keechma/entitydb,
                             :keechma.entitydb/schema
                               {:article {:entitydb/id :slug,
                                          :entitydb/relations {:author :user}},
                                :comment {:entitydb/relations {:author :user}},
                                :user {:entitydb/id :username}}},
      :jwt #:keechma.controller{:params true},
      :role #:keechma.controller{:params (fn [{:keys [jwt]}]
                                           (if jwt :user :guest)),
                                 :type :keechma/subscription,
                                 :deps [:jwt]},
      :current-user #:keechma.controller{:params true,
                                         :deps [:jwt :dataloader :entitydb]},
      :profile-user
        #:keechma.controller{:params (fn [{:keys [router]}] (:user router)),
                             :deps [:jwt :dataloader :router :entitydb]},
      :tags #:keechma.controller{:params homepage?,
                                 :deps [:router :dataloader]},
      :articles #:keechma.controller{:deps [:router :jwt :entitydb :dataloader],
                                     :params
                                       app.controllers.articles/get-params},
      :article #:keechma.controller{:deps [:router :jwt :entitydb :dataloader],
                                    :params slug},
      :comments #:keechma.controller{:deps [:entitydb :dataloader :router],
                                     :params slug}},
   :keechma/apps
     {:user
        {:keechma.app/should-run? (role-eq? :user),
         :keechma.app/deps [:role],
         :keechma/controllers
           {:settings-form
              #:keechma.controller{:type :user/settings-form,
                                   :params (fn [{:keys [router current-user]}]
                                             (when (= "settings" (:page router))
                                               current-user)),
                                   :deps [:router :jwt :current-user]},
            :user-actions #:keechma.controller{:type :user/user-actions,
                                               :params true,
                                               :deps [:router :entitydb :jwt]},
            :editor-form #:keechma.controller{:type :user/editor-form,
                                              :params (page-eq? "editor"),
                                              :deps [:router :article :jwt]},
            :comment-form
              #:keechma.controller{:type :user/comment-form,
                                   :params (fn [{:keys [router]}]
                                             (when (= "article" (:page router))
                                               (:slug router))),
                                   :deps [:router :jwt]}}},
      :guest {:keechma.app/should-run? (role-eq? :guest),
              :keechma.app/deps [:role],
              :keechma/controllers
                {:user-actions #:keechma.controller{:type :guest/user-actions,
                                                    :params true,
                                                    :deps [:router]},
                 :login-form #:keechma.controller{:type :guest/login-form,
                                                  :params (page-eq? "login"),
                                                  :deps [:router :jwt]},
                 :register-form #:keechma.controller{:type :guest/register-form,
                                                     :params (page-eq?
                                                               "register"),
                                                     :deps [:router :jwt]}}}}})