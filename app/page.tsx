import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import ProfileCarousel from "./components/profile-carousel"
import { ThemeToggle } from "@/components/theme-toggle"
import AnimatedSection from "./components/animated-section"
import FadeInUp from "./components/fade-in-up"
import StaggeredGrid from "./components/staggered-grid"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block pl-5">Emmanuel.dami</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <ThemeToggle />
            <a href="/resume.pdf" download="Emmanuel_Damilare_Adegbite_Resume.pdf" className="inline-flex">
              {/* <Button variant="outline" className="bg-transparent">
                Resume
              </Button> */}
            </a>
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <AnimatedSection id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <FadeInUp delay={0.2}>
                <div className="flex justify-center">
                  <ProfileCarousel />
                </div>
              </FadeInUp>
              <FadeInUp delay={0.4}>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                      Emmanuel Damilare Adegbite
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
                      Cybersecurity Analyst & Support Specialist
                    </p>
                    <p className="text-lg text-gray-500 dark:text-gray-400">👋 Hi, I'm Emmanuel Damilare Adegbite</p>
                    <p className="text-gray-500 md:text-lg dark:text-gray-400">
                      A curious mind with a passion for cybersecurity, people, and problem-solving.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      From configuring Cisco routers in Lagos to presenting cybersecurity trends to hundreds of students
                      in Edinburgh, my journey has been anything but linear, but every step has been intentional. I'm a
                      cybersecurity analyst, support specialist, and natural communicator, combining deep technical
                      skills with a human touch.
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">🚀 My Journey</h3>
                      <div className="space-y-3 text-gray-600 dark:text-gray-300">
                        <p>
                          I started out in Nigeria, where I earned my B.Eng in Computer Engineering from University of Ilorin, Nigeria and quickly immersed
                          myself in network security through hands-on internships. At Aero Contractors of Nigeria, I got my start by
                          configuring enterprise networks, setting up VPNs, and hardening systems against DDos attacks.
                          That early exposure to real-world cyber threats lit a fire in me, it showed me how critical
                          security is in the digital world we rely on.
                        </p>
                        <p>
                          That drive led me to two dynamic analyst roles; first at FemTech IT, then at DOTS ICT
                          Institute of Technology, where I designed incident response protocols, deployed SIEM tools,
                          led penetration tests, and slashed breach detection times. Along the way, I learned that
                          cybersecurity isn't just about tools and firewalls, it's about people. Protecting them.
                          Empowering them. Educating them.
                        </p>
                        <p>
                          Now in the UK, I'm pursuing a Master's in Cybersecurity at Edinburgh Napier University,
                          sharpening my skills while serving as an International Student Ambassador. Whether mentoring
                          newcomers or representing the university at conferences, I thrive at the intersection of tech
                          and human connection.
                        </p>
                         <p>
                          🌍 Beyond the Screen
                          Whether I’m walking someone through a self-exclusion tool as a Customer Service Rep at William Hill, or presenting at university open days, I believe tech should be approachable. My core strength is empathy; understanding the user, the problem, and the solution.
                          Security starts with trust. I build it with every ticket resolved, every system secured, and every conversation had.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-x-4">
                    <Link href="https://github.com/Cybernuel" target="_blank">
                      <Button variant="outline" size="icon">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                    <Link href="https://linkedin.com/in/thedamilare" target="_blank">
                      <Button variant="outline" size="icon">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                   <a href="mailto:m33tdamilare@gmail.com" target="hello silas">
                      <Button variant="outline" size="icon">
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Email</span>
                      </Button>
                    </a>

                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <FadeInUp>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Projects
              </h2>
            </FadeInUp>
            <StaggeredGrid>
              <ProjectCard
                title="SSH brute-force"
                description="A Python SSH brute-force tool for simulating password-guessing attacks on SSH systems, built for ethical hacking and education."
                image="/ssh_bruteforcer.jpg?height=400&width=600"
                link="https://github.com/Cybernuel/SSh-Brute-force/blob/main/ssh_bruteforce.py"
                tags={["Python", "SSH", "Brute Force", "Ethical Hacking"]}
              />
              <ProjectCard
                title="Password Cracking"
                description="Python scripts for automating password cracking with Hashcat and John the Ripper, built for ethical hacking and research."
                image="/password_cracking.jpg?height=400&width=600"
                link="https://github.com/Cybernuel/Password-Cracking-Lab---Automating-Hashcat-and-John-the-Ripper/blob/main/Hashcat.py"
                tags={["Python", "Hashcat", "John the Ripper", "Password Cracking"]}
              />
              <ProjectCard
                title="Armitage Network Attack"
                description="Python scripts for automating network attacks with Metasploit, targeting various systems. Ideal for ethical hacking and research."
                image="/Armitage Network Attack.jpg?height=400&width=600"
                link="https://github.com/Cybernuel/Armitage-Network-Attack-Lab---Automating-Exploits-with-Metasploit/blob/main/Armitage.py"
                tags={["Python", "Metasploit", "Network Security"]}
              />
               <ProjectCard
                title="Port Scanner"
                description="A fast, multi-threaded Python port scanner for ethical hacking, recon, and pentesting labs."
                image="/Port Scanner.png?height=400&width=600"
                link="https://github.com/Cybernuel/port-scanner/blob/main/port-scanner.py"
                tags={["Python", "Network Security", "Ethical Hacking"]}
              />
              <ProjectCard
                title="SubHunter"
                description="A simple Python subdomain enumeration tool that checks DNS resolution."
                image="/sub_huter.jpg?height=400&width=600"
                link="https://github.com/Cybernuel/subhunter/blob/main/subhunter.py"
                tags={["Python", "Subdomain Enumeration", "Ethical Hacking"]}
              />
              <ProjectCard
                title="Honey Pot"
                description="T-Pot is a high-interaction honeypot platform that captures and analyses real-world attacks for threat intelligence and research."
                image="/honey_pot.png?height=400&width=600"
                link="https://github.com/Cybernuel/honey_pot/blob/main/README.md"
                tags={["TPot", "Honeypot", "Cybersecurity", "Threat Intelligence"]}
              />
                <ProjectCard
                title="Ransomware Simulator"
                description="Simulates file encryption with .locked extension and a ransom note, with safe decryption for educational purposes."
                image="/rasomeware.png?height=400&width=600"
                link="https://github.com/Cybernuel/ransomware_simulator"
                tags={["Python", "Rasomeware", "Cybersecurity", "Threat Intelligence"]}
              />
              <ProjectCard
                title="Log analyzer"
                description="A Python-powered log analysis tool that simulates how a SOC analyst hunts for suspicious activity in logs."
                image="/minilog_analyzer.png?height=400&width=600"
                link="https://github.com/Cybernuel/mini-log-analyzer"
                tags={["Python", "Blue Team", "Cybersecurity", "Threat Hunting"]}
              />
                <ProjectCard
                title="Packet Sniffer"
                description="A lightweight Python packet sniffer using scapy, built for real-time network traffic analysis."
                image="/Packet_Sniffer.png?height=400&width=600"
                link="https://github.com/Cybernuel/public-ip-sniffer"
                tags={["Python", "Cybersecurity","NetworkSecurity"]}
              />
              <ProjectCard
                title="WebApp Recon & Exploitation"
                description="A hands-on red team exercise focused on discovering and exploiting common web application vulnerabilities."
                image="/web_exploit.png?height=400&width=600"
                link="https://github.com/Cybernuel/Web-App-Recon-Exploitation"
                tags={["OWASP ", "Cybersecurity","Burp Suite"]}
              />
               <ProjectCard
                title="Internal Enumeration & Privilege Escalation"
                description="Active Directory (AD) internal enumeration, password attacks, and privilege escalation"
                image="/AD_LAB.png?height=400&width=600"
                link="https://github.com/Cybernuel/Active-Directory-Lab-Enumeration-Privilege-Escalation"
                tags={["AD ", "Red Team","Hashcat"]}
              />
            </StaggeredGrid>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <FadeInUp>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                TOOLS
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <TechStack />
            </FadeInUp>
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <FadeInUp>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                  Get in Touch
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <ContactForm />
              </FadeInUp>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Emmanuel.dami. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
