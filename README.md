# Express_js-userRole
User Role autherization.

# Index.js

conatining the routings

/course/grades
    authPage is the middleware which checks the autherization of the users.
/course/:number
    authCourse middleware permission on the each courses.

# middleware.js

    function authPage, looks into the availability of the roles from the body with the existing authrised user array.

    function authCourse checks the course numbers accoding to the parameter.

