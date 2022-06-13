// const { profile } = require("../../models");

// exports.getProfile = async (req, res) => {
//   try {
//     const idUser = req.user.id;

//     let data = await profile.findOne({
//       where: {
//         idUser,
//       },
//       attributes: {
//         exclude: ["createdAt", "updatedAt", "idUser"],
//       },
//     });

//     data = JSON.parse(JSON.stringify(data));

//     data = {
//       ...data,
//       image: data.image ? process.env.PATH_FILE + data.image : null,
//     };

//     res.send({
//       status: "success...",
//       data,
//     });
//   } catch (error) {
//     console.log(error);
//     res.send({
//       status: "failed",
//       message: "Server Error",
//     });
//   }
// };

// exports.updateProfile = async (req, res) => {
//   try {

//     const { id } = req.params;
//     const body = req.body;


//     const findUser = await profile.findOne({ where: { id } });

//     if (!findUser) {
//       return res.status(404).send({
//         status: "Error",
//         message: "user not found",
//       });
//     }

//     const dataUpdated = {
//       ...body,
//       avatar: req?.files?.avatar[0]?.filename
//     };

//     const data = await profile.update(dataUpdated, {
//       where: { id }
//     })

//     res.status(200).send({
//       status: "success",
//       data: {
//         dataUpdated
//       }
//     });

//   } catch (error) {
//     console.log(error)
//     res.status(500).send({
//       status: 'Failed',
//       message: 'Server Error'
//     })
//   }
// }

// exports.addProfile = async (req, res) => {
//   try {
//     const data = {
//       gender: req.body.gender,
//       phone: req.body.phone,
//       address: req.body.address,
//       image: req.file.filename,
//       idUser: req.user.id,
//     };

//     let newProfile = await product.create(data);

//     res.send({
//       status: "success...",
//       data: {
//         ...newProfile,
//         image: process.env.PATH_FILE + newProfile.image,
//       },
//     });
//   } catch (error) {
//     console.log(error)
//     res.status(500).send({
//       status: "failed",
//       message: "Server Error",
//     });

//   }
// }


const { profile } = require('../../models');


exports.getProfiles = async (req, res) => {
  try {
    const idUser = req.user.id;

    let data = await profile.findOne({
      where: {
        idUser,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'idUser'],
      },
    });

    data = JSON.parse(JSON.stringify(data));

    data = {
      ...data,
      image: data.image ? process.env.PATH_FILE + data.image : null,
    };

    res.send({
      status: 'success...',
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};
exports.getProfile = async (req, res) => {
  try {
    const idUser = req.user.id;
    const { id } = req.params;

    let data = await profile.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'idUser'],
      },
    });

    data = JSON.parse(JSON.stringify(data));

    data = {
      ...data,
      image: data.image ? process.env.PATH_FILE + data.image : null,
    };

    res.send({
      status: 'success...',
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};
exports.addProfile = async (req, res) => {
  try {
    let data = req.body;

    data.idUser = req.user.id;
    data.image = req.file.filename;

    const newPropile = await profile.create(data);

    const profileData = await profile.findOne({
      where: {
        idUser: data.idUser,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'idUser'],
      },
    });

    data = JSON.parse(JSON.stringify(data));

    data = {
      ...data,
      image: data.image ? process.env.PATH_FILE + data.image : null,
    };

    res.send({
      status: 'success...',
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};
exports.updateProfile = async (req, res) => {
  try {
    let data = req.body;

    data.idUser = req.user.id;
    data.image = req.file.filename;
    const { id } = req.params;

    await profile.update(data, {
      where: {
        id,
      }
    });
    const profileData = await profile.findOne({
      where: {
        idUser: data.idUser,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'idUser'],
      },
    });

    data = JSON.parse(JSON.stringify(data));

    data = {
      ...data,
      image: data.image ? process.env.PATH_FILE + data.image : null,
    };

    res.send({
      status: 'success...',
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};