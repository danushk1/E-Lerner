export default function CreateCourses() {
  // const courseContent = [
  //   { title: 'Learn the Basics of PHP', lessons: 1, duration: '1 h : 06 m : 51 s', lessons_option: ['Basic PHP'], link: ['Basic_PHP.lk'], status: 0 },
  //   { title: 'Understand MVC Architecture', lessons: 2, duration: '1 h : 20 m : 10 s', lessons_option: ['Basic PHP', 'Advanced PHP'], link: ['Basic_PHP.lk', 'Advanced_php2.lk'], status: 1 },
  //   { title: 'Set Up Laravel Development Environment', lessons: 4, duration: '0 h : 46 m : 50 s', lessons_option: ['Basic PHP', 'Advanced PHP', 'Basic Laravel', 'Advanced Laravel'], link: ['Basic_PHP.l3k', 'Advanced_php2.lk', 'Basic_PHP4.lk', 'Advanced_php24.lk'], status: 0 },
  //   { title: 'Learn Laravel Fundamentals', lessons: 2, duration: '1 h : 36 m : 22 s', lessons_option: ['Basic PHP', 'Advanced PHP'], link: ['Basic_PHP.lk', 'Advanced_php2.lk'], status: 0 },
  //   { title: 'Work with Databases in Laravel', lessons: 3, duration: '1 h : 16 m : 05 s', lessons_option: ['Basic PHP', 'Advanced PHP', 'Basic Laravel'], link: ['Basic_PHP.lk', 'Advanced_php2.lk', 'Basic_PHP4.lk'], status: 1 },
  //   { title: 'Learn Authentication & Authorization', lessons: 5, duration: '1 h : 00 m : 00 s', lessons_option: ['Basic PHP', 'Advanced PHP', 'Basic Laravel', 'Advanced Laravel', 'Advanced Laravel'], link: ['Basic_PHP.lk', 'Advanced_php2.lk', 'Basic_PHP4.lk', 'Advanced_php24.lk', 'Advanced_php24.lk'], status: 0 },
  //   { title: 'Work with APIs & Laravel Sanctum/Passport', lessons: 2, duration: '1 h : 16 m : 31 s', lessons_option: ['Basic PHP', 'Advanced PHP'], link: ['Basic_PHP.lk', 'Advanced_php2.lk'], status: 0 },
  //   { title: 'Learn Advanced Laravel Concepts', lessons: 1, duration: '1 h : 06 m : 01 s', lessons_option: ['Basic PHP'], link: ['Basic_PHP.lk'], status: 0 },
  //   { title: 'Build a Real-World Project', lessons: 1, duration: '1 h : 56 m : 10 s', lessons_option: ['Basic PHP'], link: ['Basic_PHP.lk'], status: 0 }
  // ];

  return (
    <div>
      <h1>Create Courses Page</h1>


 {/* Course Content Section */}
 <section className="p-6 md:p-12">
        <Card>
          <CardHeader>
            <CardTitle>Course Content</CardTitle>
          </CardHeader>

          <CardContent className="divide-y">
            {courseContent.map((item, idx) => (
              <div key={idx} className="py-4">

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-gray-500" />
                    <p className="font-medium">{item.title}</p>
                  </div>

                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>🗒️ : {item.lessons}</span>
                    <span>
                      <Clock className="inline w-4 h-4 mr-1" />
                      {item.duration}
                    </span>
                  </div>
                </div>

                {/* Lessons Option List */}
                <div className="pl-6 pt-2 grid grid-cols-2 gap-2">
                  {item.lessons_option.map((lesson, lessonIdx) => {
                    const isDisabled = item.status === 0; // Determine if the lesson should be disabled based on status
                    return (
                      <a
                        href={item.link[lessonIdx]}
                        key={lessonIdx}
                        className={`inline-block text-xs px-2 py-1 rounded ${isDisabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-blue-100 text-blue-700'
                          }`}
                        aria-disabled={isDisabled ? 'true' : 'false'}
                      >

                        <div className="flex justify-between w-full">
                          <span className="ml-2">{lesson}</span>
                          {/* Conditionally render lock or unlock icon based on isDisabled */}
                          {isDisabled ? (
                            <img src={lock} alt="Lock icon" className="w-4 h-4 inline-block" />
                          ) : (
                            <img src={Unlock} alt="Unlock icon" className="w-4 h-4 inline-block" />
                          )}
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>


      </section>
    </div>
  );
}

// 9  2.40