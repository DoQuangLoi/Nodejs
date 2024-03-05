const thiModels = require('./modelThi');
// truy vấn người dùng
const thongtin = async ()=>{
  try {
    const player = await thiModels.find({}).sort({ points: -1 }).limit(5);
    return player;
  } catch (error) {
    console.log(error)
  }
}
const themplayer = async (body)=>{
try {
    const {name, points, time } = body;

    if(isNaN(points)==true|| points<0){
      throw new Error('Điểm phải là 1 số và dương');
    }
    if(isNaN(time)==true|| time<0){
      throw new Error('Time phải là 1 số và dương');
    }
    
    const name1 = await thiModels.findOne({name});
    console.log(name1)
    if(name1 ){throw new Error('Tên không được trùng')}
    const player = new thiModels({name: name, points: points, time: time});
    await player.save();
    if(!player){throw new Error('Thêm mới thất bại')}
} catch (error) {
    console.log(error);
    throw new Error(error.message)
}

}


module.exports={
thongtin,
themplayer
}