import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Wishlist from "../components/Wishlist"

describe("Wishlist Tests", () => {
    // (Maybe setup some mock-data)
    const trip = {
        id: 1,
        title: "BT01",
        description: "San Francisco World Trade Center on new Server/IOT/Client",
        startTrip: [2021, 2, 13, 0, 0],
        endTrip: [2021, 2, 15, 16, 56]
    }

    test("Expect Wishlist to be in the document", () => {
        render(<Wishlist wishlist={[trip]}></Wishlist>)
        const wishlist = screen.getByTestId("wishlist")
        expect(wishlist).toBeInTheDocument();
    })

    test("if Wishlist component renders trip", () => {
        render(<Wishlist wishlist={[trip]}></Wishlist>)
        const tripInDom = screen.getByTestId("render-trip")
        expect(tripInDom).toBeInTheDocument()
    })

    test("if Wishlist shows empty message", () => {
        render(<Wishlist wishlist={[]}></Wishlist>)
        const emptyText = screen.getByText("Wishlist is empty")
        expect(emptyText).toBeInTheDocument()
    })

    test("if empty wishlist button works", () => {
        const clearWishlistMock = jest.fn();

        render(<Wishlist wishlist={[trip]} clearWishlist={clearWishlistMock}></Wishlist>)

        const button = screen.getByTestId("empty-wishlist")
        fireEvent.click(button)

        expect(clearWishlistMock).toHaveBeenCalledTimes(1);
    })

    test("if remove item works", () => {
        const mockItem = [{
            id: 1,
            title: "BT01",
            description: "San Francisco World Trade Center on new Server/IOT/Client",
            startTrip: [2021, 2, 13, 0, 0],
            endTrip: [2021, 2, 15, 16, 56]
        }]

        const mockRemoveFromWishlist = jest.fn();

        render(<Wishlist wishlist={mockItem} removeFromWishlist={mockRemoveFromWishlist} />)

        const deleteButton = screen.getByText("delete Item");

        fireEvent.click(deleteButton);

        expect(mockRemoveFromWishlist).toHaveBeenCalledTimes(1);
        expect(mockRemoveFromWishlist).toHaveBeenCalledWith(mockItem[0]);
    })
})