import firebase from "../../../lib/firebase";

export default (req, res) => {
  firebase
    .collection("projects")
    .doc(req.query.id)
    .get()
    .then((doc) => {
      res.json(doc.data());
    })
    .catch((error) => {
      res.json({ error });
    });
};
