'use strict';


blogModels.factory("User", ["BaseEntity",
    function (BaseEntity) {
        function User (data) {
            BaseEntity.constructor.call(this, data);

            this.add("firstName",   "string");
            this.add("lastName",    "string");
            this.add("username",    "string");
            this.add("email",       "string");
            this.add("salt",        "string");
            this.add("password",    "string");
            this.add("roles",       "string", {enumerable: true});
        }

        BaseEntity.apply(User);

        return User;
    }
]);