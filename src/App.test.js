import App from "./App"
import {render, screen, waitFor} from "@testing-library/react"

beforeEach(() => {
    fetch.resetMocks()
})

describe("testing mock fetch request", () => {
    test("recieves GitHub name from GitHub REST API using jest fetch mock", async () => {
        fetch.mockResponseOnce(JSON.stringify({name: "coder"}))
        render(<App/>)
        const gitHubName = await waitFor(() => screen.getByRole("heading", {level: 2}))
        expect(gitHubName).toHaveTextContent("coder")
    })
})

describe("pt. 2", () => {
    test("recieves GitHub url from GitHubREST API using jest fetch mock", async () => {
        fetch.mockResponseOnce(JSON.stringify({html_url: "https://github.com/test"}))
        render(<App/>)
        const gitHubURL = await waitFor(() => screen.findByRole("link"))
        expect(gitHubURL).toHaveAttribute("href", "https://github.com/test")
    })
})

describe("pt. 3", () => {
    test("recieves GitHub picture url from GitHubREST API using jest fetch mock", async () => {
        fetch.mockResponseOnce(JSON.stringify({avatar_url: "https://github.com/picturetest"}))
        render(<App/>)
        const gitHubURL = await waitFor(() => screen.findByRole("img"))
        expect(gitHubURL).toHaveAttribute("src", "https://github.com/picturetest")
    })
})