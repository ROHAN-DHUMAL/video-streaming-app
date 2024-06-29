const asyncHandler = (fn) => {
    (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => {
            next(err);
        });
    };
};

export default asyncHandler;

// const asyncHandler = (fn) => async (err, req, res, next) => {
//     try {
//         await fn(err, req, res, next);
//     } catch (error) {
//         res.Status(err.code || 500).json({
//             success: false,
//             message: err.message,
//         });
//     }
// };
