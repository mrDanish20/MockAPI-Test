import axios from "axios";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link } from 'react-router-dom';


export default function BookingForm() {
    let [Name, setName] = useState("");
    let [Phone, setPhone] = useState("");
    let [Email, setEmail] = useState("");
    let [Pickup, setPickup] = useState("");
    let [Dropoff, setDropoff] = useState("");
    let [RideType, setRideType] = useState("");
    let [Passengers, setPassengers] = useState(0);
    let [PickupTime, setPickupTime] = useState("");
    let [PaymentMethod, setPaymentMethod] = useState("");
    let [PromoCode, setPromoCode] = useState("");
    let [ChildSeat, setChildSeat] = useState("");
    let [Wheelchair, setWheelchair] = useState("");
    let [Notes, setNotes] = useState("");
    let [Terms, setTerms] = useState("");
    let [Msg, setMsg] = useState("");
    let [Show, setShow] = useState(false);


    async function submit() {
        try {
            let response = await axios.post("https://67b0235fdffcd88a67886e99.mockapi.io/Careembooking", {
                name: Name,
                phone: Phone,
                email: Email,
                pickup: Pickup,
                dropoff: Dropoff,
                rideType: RideType,
                passengers: Passengers,
                pickupTime: PickupTime,
                paymentMethod: PaymentMethod,
                promoCode: PromoCode,
                childSeat: ChildSeat,
                wheelchair: Wheelchair,
                notes: Notes,
                terms: Terms
            });

            setMsg('Data Saved Successfully ✅');
            setShow(true);
            console.log("Data has been sent");
            clear();
        } catch (error) {
            console.log(error);
        }
    }

    function clear(){
        setName("");
        setPhone("");
        setEmail("");
        setPickup("");
        setDropoff("");
        setRideType("");
        setPassengers();
        setPickupTime("");
        setPaymentMethod("");
        setPromoCode("");
        setChildSeat("");
        setWheelchair("");
        setNotes("");
        setTerms("");

    }

    return (
        <div className="container">
            <h1 className="my-3 fw-bold">Careem Ride Booking</h1>
          
            
            <h2 className="fw-bold py-3">User Information</h2>
            <label>Enter Your Full Name</label>
            <input type="text" className="form-control my-3" placeholder="Enter Your Full Name" value={Name} onChange={(e) => setName(e.target.value)} required />

            <label>Enter Your Phone</label>
            <input type="tel" className="form-control my-3" placeholder="Enter Your Phone" value={Phone} onChange={(e) => setPhone(e.target.value)} required />

            <label>Enter Your Email Address</label>
            <input type="email" className="form-control my-3" placeholder="Enter Your Email Address" value={Email} onChange={(e) => setEmail(e.target.value)} required />

          
            <h2 className="fw-bold py-3">Ride Details</h2>
            <label>Enter Your Pickup Location</label>
            <input type="text" className="form-control my-3" placeholder="Enter Your Pickup Location" value={Pickup} onChange={(e) => setPickup(e.target.value)} required />

            <label>Enter Your Drop-off Location</label>
            <input type="text" className="form-control my-3" placeholder="Enter Your Drop-off Location" value={Dropoff} onChange={(e) => setDropoff(e.target.value)} required />

            <label>Select Ride Type</label>
            <select className="form-control my-3" value={RideType} onChange={(e) => setRideType(e.target.value)} required>
                <option value="Go Mini">Go Mini</option>
                <option value="Business">Business</option>
                <option value="Bike">Bike</option>
                <option value="Delivery">Delivery</option>
            </select>

            <label>Enter Number of Passengers</label>
            <input type="number" className="form-control my-3" placeholder="Enter Number of Passengers" value={Passengers} onChange={(e) => setPassengers(parseInt(e.target.value) || 1)} required min="1" />

            <h2 className="fw-bold py-3">Ride Preferences</h2>

            <label>Enter Your Pickup Time</label>
            <input type="datetime-local" className="form-control my-3" value={PickupTime} onChange={(e) => setPickupTime(e.target.value)} required />

            <label>Enter Your Payment Method</label>
            <div className="my-2">
                <input type="radio" name="Payment" value="Cash" checked={PaymentMethod === "Cash"} onChange={(e) => setPaymentMethod(e.target.value)} /> Cash &nbsp;
                <input type="radio" name="Payment" value="Credit/Debit Card" checked={PaymentMethod === "Credit/Debit Card"} onChange={(e) => setPaymentMethod(e.target.value)} /> Credit/Debit Card &nbsp;
                <input type="radio" name="Payment" value="Wallet" checked={PaymentMethod === "Wallet"} onChange={(e) => setPaymentMethod(e.target.value)} /> Wallet
            </div>

            <label>Enter Your Promo Code</label>
            <input type="text" className="form-control my-3" placeholder="Enter Your Promo Code" value={PromoCode} onChange={(e) => setPromoCode(e.target.value)} />

           
            <h2 className="fw-bold">Special Requests</h2>
            <label>Need a Child Seat?</label>
            <div className="my-2">
                <input type="radio" name="seat" value="Yes" checked={ChildSeat === "Yes"} onChange={(e) => setChildSeat(e.target.value)} /> Yes &nbsp;
                <input type="radio" name="seat" value="No" checked={ChildSeat === "No"} onChange={(e) => setChildSeat(e.target.value)} /> No
            </div>

            <label>Need a Wheelchair Accessible Ride?</label>
            <div className="my-2">
                <input type="radio" name="Wheelchair" value="Yes" checked={Wheelchair === "Yes"} onChange={(e) => setWheelchair(e.target.value)} /> Yes &nbsp;
                <input type="radio" name="Wheelchair" value="No" checked={Wheelchair === "No"} onChange={(e) => setWheelchair(e.target.value)} /> No
            </div>

            <label>Additional Notes</label>
            <textarea className="form-control my-3" placeholder="Additional Notes" value={Notes} onChange={(e) => setNotes(e.target.value)}></textarea>

          
            <h2 className="fw-bold">Terms & Conditions</h2>
            <label>Agree to Terms & Conditions?</label>
            <div className="my-2">
                <input type="radio" name="Terms" value="Yes" checked={Terms === "Yes"} onChange={(e) => setTerms(e.target.value)} /> "I confirm that all the provided details are correct and agree to Careem's ride policies."
            </div>

           
            <button className="btn btn-primary my-3" onClick={submit}>Submit</button>

            {Show && <div className="alert alert-success mt-3">{Msg}</div>}
 <br />
        <Link className="btn btn-secondary my-3" to="/Data">View Data</Link>
        </div>
    );
}
