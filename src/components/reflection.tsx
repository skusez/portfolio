import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { FaBackward } from "react-icons/fa";

const markdown = {
  a: `
# Reflection on Application Systems Course

Starting this course in Application Systems, I'm excited by the dynamic field of app design and development. My passion for creating digital solutions that make a difference led me here, and I hope to gain a deep understanding of the entire application lifecycle, from concept to implementation.

My main goal is to build a comprehensive view of how applications are developed. I'm eager to dive into system architecture, user experience design, and technology integration to build efficient, reliable apps. By the end of the course, I aim to have the skills to design applications that are not only functional but also user-friendly.

I'm already proficient in JavaScript for web apps, which gives me a solid front-end foundation. However, I want to expand my skills in backend development, database management, system scalability, and cross-platform development. I'm also keen to learn more about cloud computing and distributed systems.

To get the most out of this course, I plan to:

- **Participate actively** in discussions and ask questions to deepen my understanding.
- **Practice hands-on**, applying concepts to real-world projects.
- **Collaborate** with my classmates to solve problems and share ideas.
- **Use additional resources** like tutorials, blogs, and documentation to supplement learning.
- **Reflect** on each topic to connect it with the bigger picture of app system design.

Long-term, I want to work on machine learning applications, and this course is an essential step towards that. Understanding how to design scalable, efficient systems will be invaluable in handling the large datasets and algorithms common in machine learning.

I'm looking forward to expanding my skills in this course and laying a solid foundation for a future career in tech.
`,
  b: `
 # Reflection on Learning from Modules 1-3

As I reach this point in the course, it’s a good opportunity to reflect on the knowledge and skills I’ve gained so far. The journey through Modules 1 to 3 has been both insightful and practical, providing me with essential tools for better application system design. Each module has contributed valuable insights that I’ve already begun applying in my work.

### Key Learning Moments and Achievements

One of the most pivotal learning moments came from **Module 1**, which emphasized the importance of effective requirements gathering. I used to view this phase as a formality, but now I see how critical it is to successful system design. Understanding how to interact with stakeholders, gather and prioritize requirements, and validate them has made me more thorough in my initial project phases, which saves time and prevents issues down the line.

**Module 2** pushed my understanding of system architecture to a new level. The focus on analyzing architectural patterns and aligning them with specific project needs was a game-changer. I've become more confident in making informed design choices, knowing how to justify my decisions, and communicating them clearly through diagrams and documentation. This has already improved the way I approach new projects.

In **Module 3**, my biggest achievement was honing my UX design and usability testing skills. Before, I relied heavily on instinct for user experience design. Now, I have a structured approach to create user-centered designs that prioritize clarity and usability. Developing interactive prototypes and iterating based on usability testing has helped me enhance both the functionality and engagement of my applications.

### Application of Concepts and Techniques

The skills I’ve gained from these modules have already been put to good use in personal and professional projects. From **Module 1**, I’ve applied better requirements gathering practices, ensuring my projects are well-aligned with client needs from the start. The structured approach to validating and documenting requirements has led to smoother workflows and clearer communication with stakeholders.

The architectural principles from **Module 2** have transformed my backend designs. I’m now more mindful of how different architectures fit specific project needs, and I’ve revisited past projects to rework their scalability and performance. My architectural decisions are more deliberate, ensuring that systems can handle future growth while remaining efficient.

**Module 3’s** UX focus has been invaluable in refining my frontend work. I’ve been able to develop more intuitive interfaces and test them rigorously to identify pain points. This module reinforced the importance of user feedback in design and helped me communicate design decisions more effectively to both users and stakeholders.

### Challenges and Overcoming Obstacles

The most significant challenge for me came from **Module 2**—the complexity of designing scalable system architectures. At first, the volume of new architectural patterns was overwhelming, but breaking down these patterns and working through smaller projects helped build my confidence. I also turned to external resources like technical forums and architecture case studies, which provided further clarity.

Balancing time between theory and hands-on practice has been another hurdle. With each module, especially **Module 3** with its focus on UX design iterations, it was easy to get lost in either prototyping or studying principles. Setting defined goals for each module helped me strike a balance and ensure steady progress.

### Areas of Progress and Opportunities for Growth

I feel I've made the most progress in understanding requirements gathering and system architecture, specifically from **Modules 1 and 2**. I now think more critically about how to structure both the front and backend of applications, ensuring they are aligned with user and project needs from the start.

However, there’s still room for improvement. I need to deepen my understanding of **cross-platform development and cloud computing**—areas that **Module 2** touched on but I want to explore further. I also see opportunities to refine my database management skills, particularly in handling complex, distributed systems that can support large-scale applications.

### Connections Between Topics and Skills

A major takeaway from Modules 1-3 has been understanding how interconnected the various elements of application design are. **Module 1’s** requirements gathering impacts the architectural choices in **Module 2**, while **Module 3** ties in by ensuring those architectural decisions lead to a smooth and engaging user experience. These modules have reinforced the importance of taking a holistic approach when designing systems—every part must work together to deliver a cohesive, high-performing application.

In summary, Modules 1-3 have laid a solid foundation for my ongoing journey as a systems designer. I’m excited to build on these skills in the upcoming modules, with a particular focus on mastering cross-platform development and cloud integration. These are crucial areas for achieving my long-term career goals and ensuring my designs continue to evolve in line with modern application needs.
  `,
  c: `
  # Reflection on Learning from Modules 4-6

Modules 4-6 have significantly enhanced my understanding of **databases** and **data security** in application systems. The focus on implementing **Access Controls**, securing data through **Encryption**, and ensuring **Regulatory Compliance** like GDPR has been transformative in shaping how I approach both the architecture and protection of sensitive information in my projects.

### Key Learning Moments

One of the most impactful moments was learning about **Access Controls**, particularly **Role-Based Access Control (RBAC)**. Implementing RBAC has allowed me to better manage who can access various parts of an application. Ensuring that only authorized users have access to sensitive data has provided a greater level of security and streamlined user permission management in my systems.

**Data Encryption** was another critical topic. Learning how to use **Key Management Systems** for secure encryption practices, and integrating **Multi-Factor Authentication (MFA)** into applications, has significantly improved the way I protect sensitive data. By encrypting user data at rest and in transit, I’ve created more secure systems, which align with best practices in modern application development.

### Applying Concepts to Projects

The principles of **Cloud-Based Infrastructure** have transformed how I handle **database scalability**. Utilizing cloud services, I’ve implemented solutions that auto-scale based on traffic, making my applications more resilient under heavy loads. Coupled with **load balancing** and **automated backups**, I’m now more confident in deploying applications that can handle varying demand while keeping data secure.

I’ve also started using **Application Performance Management (APM) Tools** and **analytical tools** to monitor and optimize database performance. By integrating these tools into my projects, I can now track system metrics, perform **cost-benefit analysis**, and ensure that the performance improvements don’t compromise security.

### Challenges and Setbacks

Understanding **distributed databases** and ensuring **interoperability** between systems posed significant challenges. Managing the complexity of synchronizing data between multiple microservices required a shift in my approach. Breaking down tasks into smaller iterations using **Agile Methodologies** helped me address these issues one step at a time. I also had to invest more time in **security audits** to ensure these distributed systems maintained robust data protection, especially in the cloud.

### Areas of Growth

My most notable growth has been in ensuring **data security** while optimizing for performance. Implementing **best practices** for data encryption, securing user access, and leveraging **cloud computing** have allowed me to create scalable, secure, and high-performing systems.
`,
  d: `
# Reflection on Learning from Modules 7-8

As I near the completion of this course with Module 8, I’ve found that Modules 7 and 8 have been particularly impactful, reinforcing earlier lessons while introducing new concepts around ethics and emerging technologies. These modules have brought everything together and provided a framework for thinking more critically about how cutting-edge innovations can be used responsibly in system design.

### Key Learning Moments

The most meaningful learning experience in these modules was the combination of ethics and emerging technologies. I appreciated how these topics were explored in tandem, highlighting the importance of addressing ethical concerns as new technologies are introduced. Emerging tech often promises incredible advancements but can also introduce questionable ethical implications—whether it's AI algorithms affecting privacy, or blockchain impacting financial accessibility. Learning to evaluate and balance these concerns has been invaluable in shaping how I approach system design.

This integration of ethics and technology was eye-opening. In the past, I might have considered security or performance as the most critical aspects of a system, but now, I recognize that ethical design should be a top priority. By focusing on the implications of these technologies from the outset, I can ensure that I build applications that are not only innovative but also responsible.

### Applying Concepts to Projects

The ethical guidelines from Module 7 have already influenced my project work. For instance, in a recent web application handling sensitive data, I incorporated clear user consent mechanisms and transparent data policies. These strategies ensured the users were aware of how their data would be processed and stored. This shift toward ethical design didn’t just improve the system’s legal compliance; it also boosted user trust, as users felt more confident about how their data was being treated.

On the emerging tech side, Module 8 helped me dive into integrating AI-driven features into my projects. By applying techniques I learned, I’ve been able to enhance the functionality of my applications while keeping the ethical considerations in check. For example, using AI responsibly by limiting data collection and ensuring user privacy was something I wouldn’t have considered as deeply before this course.

### Challenges and Uncertainties

A significant challenge I faced in these modules was balancing the appeal of emerging technologies with the ethical dilemmas they pose. Technologies like AI, blockchain, or even IoT can have revolutionary impacts on applications but come with potential risks to privacy, accessibility, or fairness. Initially, I struggled with understanding the full scope of these ethical implications, but by engaging with case studies and discussions from the course, I began to develop strategies to incorporate these concerns into my design process.

Another uncertainty was determining how to align my desire to implement the latest technologies with long-term ethical considerations. Often, the excitement around a new tool or framework can overshadow concerns about user rights or data protection. The course helped me shift this mindset, so I now approach each new technology with a more critical eye, evaluating its long-term impact on users and society.

### Areas of Growth and Feedback

I’ve made significant growth in my ability to think critically about the ethical implications of emerging technologies. Before these modules, I often focused primarily on the technical efficiency or scalability of a system, but now I’ve expanded my perspective to include the moral responsibility of building applications that consider user rights, data privacy, and fairness. The feedback I’ve received from peers has highlighted how these considerations have improved the design and security of my applications.

Learning to adopt a mindset that combines ethical considerations with cutting-edge tech has been transformative. This has been particularly rewarding in projects where I’ve used technologies like AI or data analytics. Ensuring that these innovations align with ethical practices has led to a stronger, more user-centric approach in my work.

### Integrating Topics from Modules 7-8

The combined focus on ethics and emerging tech in Modules 7-8 built directly on my earlier lessons, offering a more holistic view of system design. Early in the course, I concentrated on technical performance and security, but these final modules showed me that innovation and responsibility need to go hand in hand. This is especially true when working with technologies that have the potential for both great societal benefit and harm.

The most important connection I’ve made is that emerging technologies should not be integrated blindly into applications. They must be critically examined for their ethical implications, especially as they become more pervasive in society. This holistic approach, where innovation is tempered with responsibility, will be a guiding principle in all of my future projects. Understanding this relationship between emerging technology and ethics will ensure that I design applications that not only push boundaries but also protect and respect users.

In conclusion, Modules 7-8 have deeply enriched my understanding of the interplay between emerging technologies and ethics. This dual focus has been crucial in preparing me to navigate the challenges of modern application design, ensuring that I prioritize both innovation and responsibility. I’m eager to apply these insights in my future work, creating systems that are both forward-thinking and ethically sound.
  `,
};

const Reflection = () => {
  const { id } = useParams<{ id: string }>();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const content = markdown[id];
  return (
    <div className="min-h-dvh my-24 px-4 py-12 relative flex flex-col items-center max-w-4xl mx-auto w-full gap-8 bg-gray-900">
      <Link
        to="/reflections"
        className="text-xl absolute left-4 top-0 font-semibold hover:underline mt-12 text-blue-400 transition-colors duration-200 hover:text-blue-300"
      >
        <FaBackward />
        Back
      </Link>
      <h1 className="text-5xl font-bold text-center text-white mb-8">
        Reflection {id?.toUpperCase()}
      </h1>

      <div className="prose prose-invert prose-lg max-w-none w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        <ReactMarkdown>{content || "# Not Found"}</ReactMarkdown>
      </div>
      <Link
        to="/reflections"
        className="text-xl font-semibold hover:underline mt-12 text-blue-400 transition-colors duration-200 hover:text-blue-300"
      >
        Back to Reflections
      </Link>
    </div>
  );
};

export default Reflection;
