/**
 * 
 * Created by leon on 6/2/16.
 */
module.exports = function (app, models) {
    // var users =
    //     [
    //         {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    //         {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    //         {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    //         {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    //     ];
    var userModel = models.userModel;
    
    app.get("/api/user", getUsers);
    app.post("/api/user", createUser);
    app.get("/api/user/:userId", findUserById);
    app.put("/api/user/:userId", updateUser);
    app.delete("/api/user/:userId", deleteUser);
    
    
    function findUserById(req, res) {
        var id = req.params.userId;
        userModel.findUserById(id).then(
            function (user) {
                res.json(user);
            },
            function (error) {
                res.sendStatus(400);
            }
        )
    }
    
    function getUsers(req, res) {
        var username = req.query['username'];
        var password = req.query['password'];
        
        if (username && password) {
            userModel.findUserByCredentials(username, password, res).then(
                function (user) {
                    res.json(user);
                },
                function (error) {
                    res.sendStatus(400);
                }
            );
                
        } else if (username) {
            userModel.findUserByUsername(username, res).then(
                function (user) {
                    res.json(user);
                },
                function (error) {
                    res.sendStatus(400);
                }
            )
        } else {
            userModel.findAllUsers().then(
                function (users) {
                    res.json(users);
                },
                function (error) {
                    res.sendstatus(400);
                }
            )
        }
    }

    function findUserByCredentials(username, password, res) {
        userModel.findUserByCredentials(username, password).then(
            function (user) {
                res.json(user);
            },
            function (error) {
                res.sendStatus(400);
            }
        )
    }

    function findUserByUsername(username, res) {
        userModel.findUserByUsername(username).then(
            function (user) {
                res.json(user);
            },
            function (error) {
                res.sendStatus(400);
            }
        )
    }

    function createUser(req, res) {
        var user = req.body;
        userModel
            .createUser(user)
            .then(
                function (user) {
                    res.json(user);
                },
                function (error) {
                    res.sendStatus(400);
                }
            )
    }
    
    function updateUser(req, res) {
        var user = req.body;
        userModel.updateUser(user).then(
            function (response) {
                res.sendStatus(200);
            },
            function (error) {
                res.sendStatus(400);
            }
        )
    }
    
    function deleteUser(req, res) {
        var id = req.params.userId;
        userModel.deleteUser(id).then(
            function (response) {
                res.sendStatus(200);
            },
            function (error) {
                res.sendStatus(400);
            }
        )
    }
};
