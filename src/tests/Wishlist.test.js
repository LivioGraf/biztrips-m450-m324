import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Wishlist from "../components/Wishlist"

describe("Test if wishlist contains trips", () => {
    // (Maybe setup some mock-data)
    const trip = {
        id: 1,
        title: "BT01",
        description: "San Francisco World Trade Center on new Server/IOT/Client",
        startTrip: [2021, 2, 13, 0, 0],
        endTrip: [2021, 2, 15, 16, 56]
    }
    render(<Wishlist wishlist={[trip]}></Wishlist>)
    const wishlist = screen.getByTestId("wishlist")

    test("Expect Wishlist to be in the document", () => {
        expect(wishlist).toBeInTheDocument();
    })

    test("Test if the texts of the trip are displayed in the renderd wishlist", () => {
        expect(wishlist).toHaveTextContent("BT01");
        expect(wishlist).toHaveTextContent("San Francisco World Trade Center on new Server/IOT/Client")
    })
})