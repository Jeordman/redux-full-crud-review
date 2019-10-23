insert into cars
    (name, img)
values
    ($1, $2);

select *
from cars
order by car_id;