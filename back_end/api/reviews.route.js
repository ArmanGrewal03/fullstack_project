import express from "express";
import ReviewsCtrl from "./reviews.controller.js"

const router=express.Router()//creates a new instance of an Express.js router. Routers are used to define and organize routes separately from the main application.

router.route("/movie/:id").get(ReviewsCtrl.apiGetReviews)
router.route("/new").post(ReviewsCtrl.apiPostReview)
router.route("/:id")
    .get(ReviewsCtrl.apiGetReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)

export default router


//File handles various https routes related to the movie. THe routes point to difference functions which tell what to do in ther ReviewsCTRl

