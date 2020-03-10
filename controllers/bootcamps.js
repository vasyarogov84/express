const ErrorResponse = require("../utils/errorResponse");
const Bootcamp = require("../models/Bootcamp");
const asyncHandler = require("../middlewear/async");

// @desc  Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = async (req, res, next) => {
  //res.status(200).json({ success: true, message: "Show all bootcamps" });
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({ success: true, data: bootcamps });
  } catch (error) {
    //res.status(400).json({ success: false, error: error.message });
    next(error);
  }
};

// @desc  Get new bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const {
    params: { id }
  } = req;

  const bootcamp = await Bootcamp.findById(id);
  if (!bootcamp)
    return next(new ErrorResponse(`Bootcamp not found with id of ${id}`, 404));
  res.status(200).json({ success: true, data: bootcamp });
});

// @desc  Create bootcamp
// @route POST /api/v1/bootcamps
// @access Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({ success: true, data: bootcamp });
});

// @desc  Update bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp not found with id of ${id}`, 404));
  }

  res.status(200).json({ success: true, data: bootcamp });
});

// @desc  Update bootcamp
// @route Delete /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp not found with id of ${id}`, 404));
  }
  res.status(200).json({ success: true });
});
