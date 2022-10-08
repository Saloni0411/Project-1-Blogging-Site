const express = require("express");
const router = express.Router();
const authorContoller = require("../controllers/authorController");
const blogController = require("../controllers/blogController");
const middleware = require("../middleware/auth");

//////////////////// -AUTHOR APIs- //////////////////////

router.post("/authors", authorContoller.createAuthor);

router.post("/authorLogin", authorContoller.authorLogIn);

//////////////////// -BLOG APIs- ///////////////////////

router.post("/blogs",middleware.Authentication, middleware.Authorization,blogController.createBlog);

router.get("/getblog", middleware.Authentication,blogController.getBlogs);

router.put("/updateBlogs/:blogId",middleware.Authentication,middleware.Authorization,blogController.updateBlogs);

router.delete("/deleteBlogs/:blogId",middleware.Authentication, middleware.Authorization,blogController.deleteBlogs);

router.delete("/deleteByQuery",middleware.Authentication, middleware.Authorization, blogController.deleteByQuery);



module.exports = router;
