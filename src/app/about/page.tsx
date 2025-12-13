// app/about/page.tsx or pages/about.tsx
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Learnest.ai</h1>

      <p className="max-w-3xl text-center text-gray-600 mb-8">
        Learnest.ai is an online learning platform dedicated to providing high-quality courses
        on frontend, backend, and full-stack development. Our mission is to make learning
        engaging, interactive, and accessible for everyone.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <Image
            src="/about-image.jpg" // replace with your image
            alt="About Learnest"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">Our Mission</h2>
          <p className="text-gray-600">
            To provide a seamless learning experience with curated content, interactive videos,
            and real-world projects that help students and professionals level up their skills.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>High-quality video courses from industry experts</li>
            <li>Interactive quizzes and projects</li>
            <li>User-friendly platform with personalized recommendations</li>
            <li>Downloadable resources and ebooks for each course</li>
          </ul>
        </div>
      </div>

      <section className="mt-12 max-w-3xl text-center text-gray-500">
        <p>
          Join thousands of learners worldwide and start your journey with Learnest.ai today!
        </p>
      </section>
    </main>
  );
}
