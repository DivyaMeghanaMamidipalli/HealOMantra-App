import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-green-50">
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Transform Your Practice, Connect Your Journey
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our community of yogis, find the perfect class for your needs, and deepen your practice with expert teachers.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/auth/signup" className="px-8 py-3 bg-primary-600 text-white rounded-md text-center hover:bg-primary-700 transition-colors">
                Join Now
              </Link>
              <Link href="/classes" className="px-8 py-3 border border-gray-300 rounded-md text-center hover:bg-gray-50 transition-colors">
                Explore Classes
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-[500px] w-full">
              <Image
                src="/Logo.jpg"
                alt="Yoga"
                width={600}
                height={500}
                className="rounded-4xl shadow-xl object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Everything You Need For Your Yoga Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Feature 1 */}
              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Discover Classes</h3>
                <p className="text-gray-600">Find the perfect class for your level, style preference, and schedule.</p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-green-50 p-8 rounded-xl">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Connect With Teachers</h3>
                <p className="text-gray-600">Build relationships with expert teachers who can guide your practice.</p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-purple-50 p-8 rounded-xl">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Track Your Progress</h3>
                <p className="text-gray-600">Set goals, monitor your journey, and celebrate your yoga achievements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">What Our Community Says</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xl">
                    LM
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Lisa M.</h4>
                    <p className="text-sm text-gray-500">Student for 6 months</p>
                  </div>
                </div>
                <p className="text-gray-600">&quot;YogaConnect has transformed my practice. The personalized recommendations and community support keep me motivated and growing.&quot;</p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xl">
                    JK
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">James K.</h4>
                    <p className="text-sm text-gray-500">Student for 1 year</p>
                  </div>
                </div>
                <p className="text-gray-600">&quot;As someone who was intimidated by yoga, this platform made it accessible. The teachers are supportive and the variety of classes is amazing.&quot;</p>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xl">
                    AP
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Amara P.</h4>
                    <p className="text-sm text-gray-500">Teacher</p>
                  </div>
                </div>
                <p className="text-gray-600">&quot;Teaching through YogaConnect has allowed me to reach more students and build a community. The platform&apos;s tools make class management effortless.&quot;</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
