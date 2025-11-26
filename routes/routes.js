import { updatePageController, updateController, deleteController } from "../controllers/updateController.js";
import express from "express";
import readController from "../controllers/readController.js";
import { homeController, createController } from "../controllers/homeController.js";

const router = express.Router();

router.get("/", homeController);
router.post("/create", createController);
router.get("/read", readController);

router.get("/update/:id", updatePageController);
router.post("/update/:id", updateController);

router.post("/delete/:id", deleteController);


export default router;
