import type { CURRENCY_CODES } from "../constants/currencies";

export type ApplicationStatus =
  "saved" | "applied" | "interview" | "offer" | "rejected" | "withdrawn";

export type LocationType = "on-site" | "remote" | "hybrid";

export type DocumentType = "resume" | "cover-letter" | "other";

export type SalaryType = "monthly" | "yearly" | "daily" | "hourly";

export type CurrencyCode = (typeof CURRENCY_CODES)[number];

export type JobApplication = {
  id: string;
  role: string;
  companyId: string;
  location: string | null;
  locationType: LocationType;
  status: ApplicationStatus;
  appliedOn: string | null;
  listingUrl: string | null;
  salaryMin: number | null;
  salaryMax: number | null;
  salaryType: SalaryType | null;
  salaryCurrency: CurrencyCode | null;
  createdAt: string;
  updatedAt: string | null;
};

export type Company = {
  id: string;
  name: string;
  websiteUrl: string | null;
  industry: string | null;
  createdAt: string;
  updatedAt: string | null;
};

export type Note = {
  id: string;
  applicationId: string;
  content: string;
  createdAt: string;
  updatedAt: string | null;
};

export type ApplicationDocument = {
  id: string;
  applicationId: string;
  type: DocumentType;
  uploadedAt: string;
  fileName: string;
};
