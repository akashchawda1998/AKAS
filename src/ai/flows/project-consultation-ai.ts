'use server';
/**
 * @fileOverview An AI-powered project estimator flow.
 *
 * - projectConsultation - A function that provides a preliminary consultation and scope estimate.
 * - ProjectConsultationInput - The input type for the projectConsultation function.
 * - ProjectConsultationOutput - The return type for the projectConsultation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectConsultationInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A detailed description of the project idea and goals.'),
  companyType: z
    .string()
    .describe('The type of company or organization (e.g., startup, NGO, established business).'),
  budgetRange: z
    .string()
    .describe('An indication of the expected budget for the project (e.g., "under $10k", "$10k-$50k", "over $50k").'),
  targetAudience: z
    .string()
    .describe('A description of the primary target audience for this project.'),
  keyFeatures: z
    .string()
    .describe('A comma-separated list of essential features or functionalities.'),
  desiredTimeline: z
    .string()
    .describe('Desired project completion timeline (e.g., "1-3 months", "3-6 months", "over 6 months").'),
});
export type ProjectConsultationInput = z.infer<typeof ProjectConsultationInputSchema>;

const ProjectConsultationOutputSchema = z.object({
  preliminaryAnalysis: z
    .string()
    .describe(
      "A comprehensive analysis of the project, rephrasing the user's idea and confirming understanding."
    ),
  recommendedServices: z
    .array(
      z.enum([
        'Website Development',
        'Mobile Application Development',
        'Salesforce Solutions',
        'Digital Marketing',
        'Social Media Growth',
        'AI & Automation',
      ])
    )
    .describe(
      'A list of services recommended by BlueNova Systems based on the project description.'
    ),
  estimatedComplexity: z
    .enum(['Low', 'Medium', 'High', 'Very High'])
    .describe('An estimation of the overall project complexity.'),
  roughTimeEstimate: z
    .string()
    .describe('A rough estimate of the project timeline, e.g., "3-6 months", "6-12 months".'),
  keyConsiderations: z
    .array(z.string())
    .describe('Important factors or potential challenges to consider for the project.'),
  nextStepsGuidance: z
    .string()
    .describe(
      'Guidance on how to proceed, strongly suggesting booking a free consultation with BlueNova Systems.'
    ),
});
export type ProjectConsultationOutput = z.infer<typeof ProjectConsultationOutputSchema>;

export async function projectConsultation(
  input: ProjectConsultationInput
): Promise<ProjectConsultationOutput> {
  return projectConsultationFlow(input);
}

const projectConsultationPrompt = ai.definePrompt({
  name: 'projectConsultationPrompt',
  input: {schema: ProjectConsultationInputSchema},
  output: {schema: ProjectConsultationOutputSchema},
  prompt: `You are an AI-powered project estimator for BlueNova Systems, an IT solutions company specializing in modern digital experiences.
Your goal is to act as a technical assistant to help potential clients quickly understand the scope of their project and provide a preliminary consultation without human intervention.

BlueNova Systems offers the following core services:
- Website Development: High-performance, responsive, SEO-friendly corporate websites, business portals, community platforms, e-commerce, NGO & membership platforms, custom admin panels, landing pages.
- Mobile Application Development
- Salesforce Solutions
- Digital Marketing
- Social Media Growth
- AI & Automation

Carefully analyze the client's input and provide a professional, structured preliminary consultation. Ensure your response is friendly and encourages the client to take the next step of booking a free consultation.

Here is the client's project information:
Project Description: {{{projectDescription}}}
Company Type: {{{companyType}}}
Budget Range: {{{budgetRange}}}
Target Audience: {{{targetAudience}}}
Key Features: {{{keyFeatures}}}
Desired Timeline: {{{desiredTimeline}}}`,
});

const projectConsultationFlow = ai.defineFlow(
  {
    name: 'projectConsultationFlow',
    inputSchema: ProjectConsultationInputSchema,
    outputSchema: ProjectConsultationOutputSchema,
  },
  async input => {
    const {output} = await projectConsultationPrompt(input);
    return output!;
  }
);
