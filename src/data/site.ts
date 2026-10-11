export const profile = {
  name: "Ersin Mutlu",
  role: "Cloud & DevOps Engineer",
  tagline:
    "I build and automate cloud platforms on Azure: infrastructure as code, CI/CD and self-service tooling that lets data teams ship without waiting on ops.",
  location: "Based in Türkiye",
  email: "ersin.mutlu@outlook.com.tr",
  links: {
    github: "https://github.com/gorbadil",
    linkedin: "https://www.linkedin.com/in/ersinm/",
    medium: "https://medium.com/@gorbadil",
  },
};

export const about = [
  "I'm a Cloud & DevOps engineer at EPAM, working on the Danone OneHouse data platform. My days are Terraform, GitHub Actions, PowerShell and Azure: turning manual, ticket-driven operations into repeatable, self-service pipelines.",
  "I like platforms that stay boring in production: everything in code, every change reviewed, every deploy re-runnable. I also write about Linux, Docker, Kubernetes and CI/CD to keep my own knowledge honest.",
];

export const experience = [
  {
    company: "EPAM Systems",
    context: "Client: Danone, OneHouse data platform",
    role: "Cloud & DevOps Engineer",
    period: "Aug 2024 - Present",
    points: [
      "Maintain the Terraform and GitHub Actions pipelines that provision per-team data environments (Azure Databricks, Data Factory, Key Vault, networking) across multiple regions and environments.",
      "Built self-service automation so teams request and receive data schemas, volumes and access groups through a pull-request flow, with Unity Catalog and Microsoft Entra ID permissions applied consistently.",
      "Run the release and deploy workflows for the shared platform: versioned release packages, environment-by-environment rollouts, idempotent re-runs.",
      "Operate ephemeral, autoscaled GitHub self-hosted runners on Azure Container Apps (KEDA) and troubleshoot capacity issues using Log Analytics.",
    ],
    skills: ["Azure", "Terraform", "GitHub Actions", "Databricks", "PowerShell", "Entra ID", "Azure Container Apps"],
  },
  {
    company: "Patika.dev",
    context: "",
    role: "Frontend Technical Coordinator",
    period: "Sep 2023 - Present",
    points: [
      "Coach and support learners in JavaScript and React bootcamps, reviewing their code and unblocking technical questions.",
    ],
    skills: ["JavaScript", "React", "HTML", "CSS"],
  },
];

export const skills = [
  { group: "Cloud", items: ["Azure", "Azure Databricks", "Azure Data Factory", "Container Apps", "Key Vault", "Entra ID"] },
  { group: "IaC & CI/CD", items: ["Terraform", "GitHub Actions", "Azure DevOps", "Jenkins", "Ansible"] },
  { group: "Containers", items: ["Docker", "Docker Swarm", "Kubernetes", "Helm"] },
  { group: "Scripting & OS", items: ["PowerShell", "Bash", "Python", "Linux", "Git"] },
];

export const projects = [
  {
    title: "Self-service data schemas",
    tag: "Platform automation",
    description:
      "A pull-request driven flow that creates Unity Catalog schemas, volumes and the matching Entra ID groups, then reconciles them with what Terraform-managed environments already provide.",
    stack: ["GitHub Actions", "PowerShell", "Databricks", "Entra ID"],
  },
  {
    title: "Multi-region release & deploy",
    tag: "Release engineering",
    description:
      "Versioned release packages and manual, environment-ordered deploy workflows for a shared platform, with per-step toggles and skip-if-already-deployed checks.",
    stack: ["GitHub Actions", "Terraform", "Azure"],
  },
  {
    title: "Autoscaled CI runners",
    tag: "Infrastructure",
    description:
      "Ephemeral GitHub runners on Azure Container Apps Jobs scaled by KEDA, with workload profiles per team and Log Analytics queries for capacity signals.",
    stack: ["Azure Container Apps", "KEDA", "Terraform", "Log Analytics"],
  },
  {
    title: "This portfolio",
    tag: "Open source",
    description:
      "Static Astro site, zero client-side framework, automatic dark mode, deployed on Vercel with every push.",
    stack: ["Astro", "Vercel"],
    href: "https://github.com/gorbadil/DevOpsPortfolioPage",
  },
];

export const posts = [
  {
    title: "How to set up a secure VPS server",
    summary: "Hardened SSH access and Docker installation on Ubuntu.",
    en: "https://medium.com/@gorbadil/how-to-setup-a-secure-vps-server-7597b95440c9",
    tr: "https://medium.com/@gorbadil/güvenli-bir-vps-sunucusu-nasıl-kurulur-daca9dec1ca0",
  },
  {
    title: "VPS, Docker, Kubernetes and Jenkins for CI/CD",
    summary: "Installing a CI/CD toolchain on a VPS with an Nginx reverse proxy.",
    en: "https://medium.com/@gorbadil/vps-docker-kubernetes-jenkins-installation-and-nginx-reverse-proxy-deb75d9caf80",
    tr: "https://medium.com/@gorbadil/vps-üzerinde-continuous-integration-continuous-deployment-ci-cd-kurulumu-ve-nginx-reverse-proxy-1a4f990cc905",
  },
  {
    title: "Scalable Jenkins on Kubernetes",
    summary: "Running Jenkins with on-demand agents on a Kubernetes cluster.",
    en: "https://github.com/gorbadil/medium/blob/main/Scalable_Jenkins_Kubernetes.md",
    tr: "https://github.com/gorbadil/medium/blob/main/Ölçeklenebilir_Jenkins_k8s.md",
  },
];
