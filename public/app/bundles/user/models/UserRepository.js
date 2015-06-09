'use strict';

blogModels.factory("UserRepository", ["BaseRepository", "User",
    function (BaseRepository, User) {
        function UserRepository(data) {
            BaseRepository.constructor.call(this, User, data);

            this.setApiURL('api/user')
        }

        BaseRepository.apply(UserRepository);


        return new UserRepository();
    }
]);