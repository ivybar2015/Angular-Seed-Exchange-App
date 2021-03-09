using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebAppAPIThree.FormResult;
using WebAppAPIThree.Models;
using WebAppAPIThree.FormModel;
using System.Web.Http.Cors;

/// WebAppAPIThree is a name of the project
namespace WebAppAPIThree.Controllers
{
 
    // ADD THIS FOR ALL APP CAN ACCESS IT
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    // RoutePrefix for all inside of UsersController class
    [RoutePrefix ("api/user")]

    // UsersController == 'Users' is a name of table and end with 'Controller' 
    public class UsersController : ApiController
    {
        private DataEntities dbase = new DataEntities();

    //////////  ALL ACTION METHODS   ////////////////////
    ///

        [HttpGet]
        [Route("getusers")]
        public object GetAllUser()
        {   // get all the user table
            var users = dbase.Users.Where(col => col.IsActive == true).ToList();
            return new { data = users };
        }
        // using POST
        [HttpPost]
        [Route("login")]
        public object Login(UserCredentialModel user)
        {
            try
            {
                // user pointer to check if username and password is matching
                var record = dbase.Users.Where(col => col.Username.Equals(user.username))
                                        .Where(col => col.Password.Equals(user.pasword));
                if(record != null)
                {
                    // User is authenticated
                    return new { msg = "Success" , dbase = record };
                }
                else
                {
                    // No Match
                    return new { msg = "User and Password do not match" };
                }

            }
            catch (Exception e)
            {
                return new { status = 404, msg = "Error" + e.InnerException };

            }

        }
        // adding new user
        // using POST
        [HttpPost]
        [Route("add")]
        // NewUserModel from FormModel folder
        public object AddUser(NewUserModel postUser)
        {

            try
            {  // create a new OBJECT to store new user information
                User tableRecord = new User();
                    tableRecord.Username = postUser.username;
                    tableRecord.FirstName = postUser.firstname;
                    tableRecord.LastName = postUser.lastname;
                    tableRecord.IsActive = true;
                    tableRecord.DateCreated = DateTime.Now;

                    // adding use add() funtion and save into data table of Users
                    dbase.Users.Add(tableRecord);
                    dbase.SaveChanges();

                    return new { msg = "Success", dbase = tableRecord };

            }
            catch (Exception e)
            {
                return new { status = 404, msg = "Error" + e.InnerException };

            }

        }

        // get/search a single user record
        [HttpPost]
        [Route("getsingleuser/{userid}")]
        public object SearchUser(int userid)
        {

            try
            {
                var userRecord = dbase.Users.Find(userid);

                if (userRecord != null)
                {                    
                    return new { msg = "Success", data = userRecord };

                }

                return new { msg = "Error", data = 0};
            }
            catch (Exception e)
            {
                return new { status = 404, msg = "Error" + e.InnerException };

            }

        }

        // update/edit record already existed
        [HttpPost]
        [Route("update")]
        public object UpdateUser(UserResult postUser )
        {
            
            try
            {
                var tableRecord = dbase.Users.Find(postUser.Id);

                if(tableRecord != null)
                {
                 
                    tableRecord.Username = postUser.username;
                    tableRecord.FirstName = postUser.firstname;
                    tableRecord.LastName = postUser.lastname;
                    // save the changing data table
                    dbase.SaveChanges();
                    return new { msg = "Success", dbase = tableRecord };

                }

                return null;
            }
            catch (Exception e)
            {
                return new { status = 404, msg = "Error" + e.InnerException };

            }

        }

        // delete exist record
        [HttpPost]
        [Route("delete/{userid}")]
        public object DeleteUser(int userid)
        {
            try
            {
                var tableRecord = dbase.Users.Find(userid);

                if (tableRecord != null)
                {
                    tableRecord.IsActive = false;
                    // save the changing data table
                    dbase.SaveChanges();

                    return new { msg = "Success - Record Delete"};

                }

                return null;
            }
            catch (Exception e)
            {
                return new { status = 404, msg = "Error" + e.InnerException };

            }

        }

        //////////////////////////////////////////
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                dbase.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserExists(int id)
        {
            return dbase.Users.Count(e => e.Id == id) > 0;
        }

    }
}