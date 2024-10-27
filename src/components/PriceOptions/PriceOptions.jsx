import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {


   const priceOptions = [
        {
          "id": 1,
          "name": "Basic",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "1 guest pass per month",
            "Access to cardio machines",
            "Free fitness assessment on sign-up",
            "WiFi access"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 49.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "5 guest passes per month",
            "Access to group classes",
            "1 personal training session per month",
            "Access to cardio and strength machines",
            "Free fitness assessment on sign-up",
            "Complimentary towel service",
            "WiFi access",
            "Discount on select merchandise"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 79.99,
          "features": [
            "Access to all gym facilities",
            "Locker room and sauna access",
            "Unlimited guest passes",
            "Unlimited group classes",
            "4 personal training sessions per month",
            "Access to premium and specialty equipment",
            "Priority booking for classes",
            "Complimentary towel and laundry service",
            "Monthly fitness assessment",
            "Nutritional advice sessions",
            "WiFi access",
            "10% discount on all merchandise"
          ]
        },
        {
          "id": 4,
          "name": "VIP",
          "price": 119.99,
          "features": [
            "All-inclusive access",
            "Private locker and premium amenities",
            "Unlimited guest passes",
            "Unlimited group and specialty classes",
            "8 personal training sessions per month",
            "Monthly nutrition consultations",
            "Monthly massage session",
            "Access to exclusive events",
            "Private steam room and sauna access",
            "Complimentary parking",
            "Towel and laundry service",
            "WiFi access",
            "15% discount on all merchandise",
            "Access to VIP lounge"
          ]
        }
      ]
      

    return (
        <div>
            <h2 className="text-5xl">Best prices in the town</h2>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;