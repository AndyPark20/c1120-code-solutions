

  select "firstName",
         "lastName",
         sum("payments"."amount") as "$total Amount"
  from "customers"
  join "payments" using ("customerId")
  group by "customerId"
  order by "$total Amount" desc;
