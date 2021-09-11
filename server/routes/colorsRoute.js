import express from 'express';
const router = express.Router();

import Colors from '../models/colorsModel.js';

router.route("/new").post((req, res) => {
   const groupName = req.body.groupName;
   const groupColors = req.body.groupColors;
   const newColors = new Colors({
      groupName,
      groupColors
   });

   newColors.save();
})

// router.route("/colors").get((req, res) => {
//    Colors.find()
//       .then(foundColors => res.json(foundColors))
// })

const getColors = async (req, res) => {
   try {
      const colors = await Colors.find()

      res.status(200).json(colors);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
}

router.get("/colors", getColors);


const editColors = async (req, res) => {
   try {
      const { id: _id } = req.params;
      const color = req.body;
      const updatedPost = await Colors.findByIdAndUpdate(_id, { ...color, _id }, { new: true });
      res.json(updatedPost);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
}
router.get("/:id", editColors);

export default router;