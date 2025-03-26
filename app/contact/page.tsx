function ContactPage() {
  return (
    <section className="px-6 py-12">
      <div className="container mx-auto rounded-2xl border-2 border-zinc-300 p-6 dark:border-zinc-700">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Left Section */}
          <div className="mb-6 text-left md:mb-0">
            <p className="font-medium text-nebula-purple dark:text-purple-400">
              Contact me
            </p>
            <h1 className="mt-2 text-2xl font-semibold md:text-3xl">
              Get in touch
            </h1>
          </div>

          <div className="md:w-1/2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="text-center md:text-left">
                <div className="inline-flex rounded-full bg-purple-100/80 p-3 text-nebula-purple dark:bg-zinc-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <h2 className="mt-4 text-lg font-medium">Email</h2>
                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                  I will answer all your questions.
                </p>
                <p className="mt-2 text-nebula-purple dark:text-purple-400">
                  mediumrare1298@gmail.com
                </p>
              </div>

              <div className="text-center md:text-left">
                <div className="inline-flex rounded-full bg-purple-100/80 p-3 text-nebula-purple dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h2 className="mt-4 text-lg font-medium">Phone</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Text or call me anytime.
                </p>
                <p className="mt-2 text-nebula-purple dark:text-purple-400">
                  +38 (095) 707 0023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
