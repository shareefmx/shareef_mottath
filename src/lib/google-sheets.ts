import Papa from "papaparse";
import { Brain, Shield, ChartLineUp, Lightning, Code, Globe, Robot } from "@phosphor-icons/react";

export interface Project {
    icon: any;
    title: string;
    description: string;
    detailedDescription: string;
    githubUrl: string;
    deployUrl: string;
    huggingFaceUrl?: string;
    technologies: string[];
}

const SHEET_URL = "https://docs.google.com/spreadsheets/d/13dNJQEOc2_8AcoWFPZ6jDItuYTYJ6iehxun-tF9iVII/export?format=csv&gid=0";

const getIconForProject = (title: string, technologies: string[]) => {
    const lowerTitle = title.toLowerCase();
    const techString = technologies.join(" ").toLowerCase();

    if (lowerTitle.includes("security") || lowerTitle.includes("shield") || lowerTitle.includes("auth") || lowerTitle.includes("verify")) {
        return Shield;
    }
    if (lowerTitle.includes("ai") || lowerTitle.includes("neural") || lowerTitle.includes("brain") || lowerTitle.includes("gpt") || techString.includes("machine learning")) {
        return Brain;
    }
    if (lowerTitle.includes("analytics") || lowerTitle.includes("chart") || lowerTitle.includes("market") || lowerTitle.includes("trading")) {
        return ChartLineUp;
    }
    if (lowerTitle.includes("automation") || lowerTitle.includes("fast") || lowerTitle.includes("lightning") || lowerTitle.includes("bot")) {
        return Lightning;
    }
    if (lowerTitle.includes("web") || techString.includes("react") || techString.includes("vue")) {
        return Globe;
    }

    return Code; // Default icon
};

export const fetchProjects = async (): Promise<Project[]> => {
    try {
        const response = await fetch(SHEET_URL);
        const csvText = await response.text();

        return new Promise((resolve, reject) => {
            Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    const projects = results.data.map((row: any) => {
                        // Parse technologies from JSON string or comma-separated string
                        let technologies: string[] = [];
                        try {
                            if (row.technologies.startsWith("[")) {
                                technologies = JSON.parse(row.technologies);
                            } else {
                                technologies = row.technologies.split(",").map((t: string) => t.trim());
                            }
                        } catch (e) {
                            console.warn("Failed to parse technologies for project:", row.title, e);
                            technologies = [];
                        }

                        return {
                            icon: getIconForProject(row.title, technologies),
                            title: row.title,
                            description: row.description,
                            detailedDescription: row.detailedDescription,
                            githubUrl: row.githubUrl,
                            deployUrl: row.deployUrl,
                            huggingFaceUrl: row.huggingface, // Note: CSV header is 'huggingface'
                            technologies: technologies,
                        };
                    });
                    resolve(projects);
                },
                error: (error: any) => {
                    reject(error);
                },
            });
        });
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
};
