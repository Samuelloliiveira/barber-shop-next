import { Card, CardContent } from "./ui/card"

export default function Footer() {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-400">
            © 2024 Copyright{" "}
            <a
              href="https://portfolio-samuel.vercel.app/"
              target="_blank"
              className="font-bold"
            >
              SamDev
            </a>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}
