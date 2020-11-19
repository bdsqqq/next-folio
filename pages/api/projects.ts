import { NextApiRequest, NextApiResponse } from "next";
import firebase from "../../lib/firebase";

export default (req: NextApiRequest, res: NextApiResponse) => {
  firebase
    .collection("projects")
    .get()
    .then((snapshot) => {
      let projects: any[] = [];
      snapshot.forEach((doc) => {
        projects.push({ ...doc.data() });
        console.log(doc.data);
      });
      res.json(projects);
    })
    .catch((error) => {
      res.json({ error });
    });
};
