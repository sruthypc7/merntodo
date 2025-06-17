const notfound=(req,res,next)=>{
    const error=new Error(`not found-${req.originalUrl}`);
    res.status(404);
    next(error);
};
const ErrorHandler=(err,req,res,next)=>{
    if(res.headersSent){
        return next(err)
    }


const Statuscode=res.Statuscode=== 200?500:res.Statuscode;
res.status(Statuscode).json({
    message:err.message,
});
};


export {notfound,ErrorHandler};
