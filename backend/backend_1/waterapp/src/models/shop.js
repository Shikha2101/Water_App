const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create geolocation schema
const GeoSchema = new Schema({
    type: {
        type:String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index:"2dsphere"
    }
});

//create shop schema & model
const ShopSchema = new Schema({
    shopname:{
        type:String,
        required: [true, 'Shop Name is required']
    },
    Area:{
        type:String,
        required:[true, 'Area is required']
    },
    can:{
        type:Number
    },

    //add in geo location
    geometry: GeoSchema
});

const Shop = mongoose.model('shopname', ShopSchema);

module.exports = Shop;