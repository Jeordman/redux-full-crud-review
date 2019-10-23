delete from cars 
where car_id = $1;

select *
from cars
order by car_id;