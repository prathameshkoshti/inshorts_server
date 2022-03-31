import News from '../modal/news.js';

export const setNews = async (req, res)=>{
    try {
       
       let data = await News.find({});
       res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}