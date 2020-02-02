const Post = require("../models/Post");

const ObjectId = require("mongoose").Types.ObjectId;

function PostController() {
  this.getPosts = function(res) {
    Post.find({ estado: "A" })
      .then(posts => {
        res.send({ posts });
      })
      .catch(error => {
        res.status(500).send({ error });
      });
  };

  this.getById = async function(_id, res) {
    try {
      let post = await Post.findById(ObjectId(_id));
      res.send({ post });
    } catch (error) {
      res.status(500).send({ error });
    }
  };

  this.insertPost = async function(postParam, res) {
    try {
      let postToSave = new Post(postParam);
      let postSaved = await postToSave.save();
      res.send({ post: postSaved });
    } catch (error) {
      res.status(500).send({ error });
    }
  };

  this.updatePost = async function(postParam, res) {
    try {
      await Post.findByIdAndUpdate(ObjectId(postParam._id), postParam);
      res.send({ post: postParam });
    } catch (error) {
      res.status(500).send({ error });
    }
  };

  this.deltePost = async function(_id, res) {
    try {
      await Post.findByIdAndRemove(ObjectId(_id));
      res.send({ success: true });
    } catch (error) {
      res.status(500).send({ error });
    }
  };
}

module.exports = new PostController();
