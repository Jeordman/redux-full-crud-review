update cars 
set name = $1, img = $2
where car_id = $3;

select *
from cars
order by car_id;