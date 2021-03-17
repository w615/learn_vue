export default function(Mistime){                
                var years, day, hours, minutes; 
                if (Mistime >= 0){
                years = Math.floor(Mistime / 1000 / 60 / 60 / 24 /366)
                console.log(years,5);
                day = Math.floor(Mistime / 1000 / 60 / 60 / 24);//毫秒/秒/分钟/小时/得到天
                hours = Math.floor(Mistime / 1000 / 60 / 60 % 24);
                minutes = Math.floor(Mistime / 1000 / 60 % 60);
                if (day < 10) {
                    day = '0' + day;
                }
                if (hours < 10) {
                    hours = '0' + hours;
                }
                if (minutes < 10) {
                    minutes = '0' + minutes;
                }
               }
                var show = years + day +  hours   + minutes;
                return show;
            }
