import jwt from "jsonwebtoken";
const generateTokenAndSetCookie=(userId,res)=>{
    try{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"18d"  
    })

    res.cookie("jwt",token,{
        maxAge: 18 * 24 * 60 * 60 * 1000,
        httpOnly:true,
        sameSite:"strict",
        secure:process.env.NODE_ENV!=="development",
    });
}catch (error) {
    console.error("Error in generateTokenAndSetCookie:", error.message);
    throw new Error("Token generation failed");
}
};

export default generateTokenAndSetCookie;