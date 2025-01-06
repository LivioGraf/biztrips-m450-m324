import { render, screen } from "@testing-library/react";
import TripList from "../components/TripList";
import * as tripService from "../services/tripService";

jest.mock("../services/tripService");
const addToWishlistMock = jest.fn();
const tripMock = [
    {
        id: 1,
        title: "BT01",
        description: "San Francisco World Trade Center on new Server/IOT/Client",
        startTrip: [2021, 2, 13, 0, 0],
        endTrip: [2021, 2, 15, 16, 56],
    },
];

describe("Trip Tests", () => {
    test("if trip contains image", async () => {
        tripService.getTripsJson.mockResolvedValueOnce(tripMock);

        render(<TripList addToWishlist={addToWishlistMock} />);

        const renderedImg = await screen.findByTestId("render-img");
        expect(renderedImg).toBeInTheDocument();
    });

    test("if trip contains title", async () => {
        tripService.getTripsJson.mockResolvedValueOnce(tripMock);

        render(<TripList addToWishlist={addToWishlistMock} />);

        const renderedTitle = await screen.findByTestId("render-title")
        expect(renderedTitle).toBeInTheDocument()
    })

    test("if trip contains description", async () => {
        tripService.getTripsJson.mockResolvedValueOnce(tripMock);

        render(<TripList addToWishlist={addToWishlistMock} />);

        const renderedDescription = await screen.findByTestId("render-description")
        expect(renderedDescription).toBeInTheDocument()
    })
});
