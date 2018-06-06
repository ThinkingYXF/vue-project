import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import Vinterface from '../../vInterface/index'
var listData = {
	swiperSlides: [{
		"name": "路飞",
		"dream": "找到ONE PIECE，并成为海贼王",
		"info": "性格积极乐观，爱憎分明且十分重视伙伴，对任何危险的事物都超感兴趣。看似白痴，却是一个大智若愚型的无愧船长之职的人",
		"url": "/src/assets/school1.jpg"
	},{
		"name": "索隆",
		"dream": "世界第一大剑豪",
		"info": "爱喝酒，爱睡觉，讲义气，海贼第一超级大路痴。为了小时候与挚友的约定而踏上了前往世界第一剑士的道路，随后成为路飞出海后遇到的第一个伙伴",
		"url": "/src/assets/school2.jpg"
	},{
		"name": "乌索普",
		"dream": "成为勇敢的海上战士",
		"info": "特征为头戴狙击防风镜、浅啡色头巾，长鼻子。先前武器为弹弓“银河小弹珠”，后武器为提高了攻击性和准确度的独角仙弹弓，并用空岛的各种贝进行了强化",
		"url": "/src/assets/friends.jpg"
	},{
		"name": "山治",
		"dream": "寻找传说中的奇迹之海－ALL BLUE",
		"info": "金发，有着卷曲眉毛，永远遮住半边脸的家伙，香烟不离口，最爱女人，很花心但很有风度，海贼中的绅士",
		"url": "/src/assets/friends1.jpg"
	},{
		"name": "娜美",
		"dream": "绘制出自己的世界地图、绘制全世界的航海图",
		"info": "拥有橘色的短发（两年后为波浪长发）和左肩的刺青（风车与橘子的图案）。使用棍术，现在武器为“魔法天候棒”",
		"url": "/src/assets/school1.jpg"
	},{
		"name": "乔巴",
		"dream": "成为万能药",
		"info": "蓝色的鼻子和一顶画有“X”标记的粉红色帽子。本身很怕热，所以喜欢的岛屿是春天的冬岛。是草帽海贼团年龄最小的成员",
		"url": "/src/assets/school2.jpg"
	},{
		"name": "罗宾",
		"dream": "寻找真正的“历史正文”",
		"info": "个性冷静，擅长考古学以及暗杀，学识渊博，对于世界政府、海盗、航海一事都知道的很详细",
		"url": "/src/assets/friends.jpg"
	},{
		"name": "弗兰奇",
		"dream": "制造出梦想之船",
		"info": "性格豪放，喜欢唱歌，跳奇怪的舞，下身喜欢只穿一条短裤。身为改造人的弗兰奇，身体藏着各种兵器",
		"url": "/src/assets/friends1.jpg"
	},{
		"name": "布鲁克",
		"dream": "环绕世界一周到伟大航道双子岬跟伙伴鲸鱼“拉布”重逢",
		"info": "原本是某国护卫队团长，后加入伦巴海贼团，50年前跟鲸鱼拉布约定在“双子峡”重逢",
		"url": "/src/assets/school1.jpg"
	}],
	swiperOption: {
		pagination: {
			el: '.swiper-pagination'
		}
	},
	activeName: null
};
export default ({
	data(){
		return listData;
	},
	components: {
		swiper,
		swiperSlide
	},
	// created: function(){
	// 	var self = this;
	// }
});

