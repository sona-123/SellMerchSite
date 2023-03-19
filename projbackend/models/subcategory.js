const mongoose=require("mongoose");
const subCategorySchema=new mongoose.Schema(
    {
        name:{
            type:string,
            unique:true,
            trim:true,
            maxlength:32,
            required:true
        }
    },
    {
        timestamps:true
    }
)
module.export=mongoose.model("subCategory",subCategorySchema);