import React, { useState } from 'react';
import { X, ShieldCheck, Download, Lock, CheckCircle2, FileText } from 'lucide-react';

interface WhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestAccess: () => void;
}

export const WhitepaperModal: React.FC<WhitepaperModalProps> = ({
  isOpen,
  onClose,
  onRequestAccess,
}) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    // Create text file blob download for whitepaper summary
    const content = `AVENORA AI — ENTERPRISE SECURITY & DATA SOVEREIGNTY WHITEPAPER SUMMARY
Version 2.4 | Classification: Enterprise Public

1. ZERO RETENTION & MODEL ISOLATION
- Customer enterprise telemetry, transcripts, and operational records are strictly never used to train, evaluate, or fine-tune foundational or shared LLMs.
- Ephemeral processing: context vectors are stored exclusively in customer-dedicated encrypted partitions.

2. TENANT ISOLATION ARCHITECTURE
- Complete logical and cryptographic isolation between tenant datasets.
- Support for Single-Tenant VPC deployments on AWS (us-east-1, eu-west-1) and Microsoft Azure.

3. COMPLIANCE STANDARDS
- SOC 2 Type II Certified annually by independent Big Four auditors.
- ISO/IEC 27001:2022 Certified Information Security Management.
- Full compliance with EU GDPR, UAE PDPL (Federal Decree-Law No. 45), and California CCPA/CPRA.

4. CRYPTOGRAPHIC CONTROLS
- AES-256 encryption at rest across all storage volumes, databases, and backup snapshots.
- TLS 1.3 enforced for all ingress and egress network traffic with HSTS.
- Customer-Managed Encryption Keys (CMEK) via AWS KMS or Azure Key Vault.

5. IDENTITY & ROLE-BASED ACCESS CONTROL (RBAC)
- SAML 2.0 and OIDC federation (Okta, Azure AD, Ping Identity).
- Automated user de-provisioning via SCIM 2.0.
- Granular permission boundaries down to individual project vectors.

Contact: security@avenora.ai | dpo@avenora.ai
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Avenora_AI_Security_Whitepaper_Executive_Summary.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-zinc-950 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-left overflow-hidden max-h-[85vh] flex flex-col">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#CCFF00]/10 blur-3xl pointer-events-none rounded-full" />

        <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
          <div className="flex items-center space-x-2.5">
            <ShieldCheck className="w-5 h-5 text-[#CCFF00]" />
            <div>
              <span className="text-xs font-mono uppercase text-[#CCFF00] tracking-wider">
                Compliance &amp; Assurance
              </span>
              <h3 className="text-xl font-bold text-white">
                Enterprise Security Whitepaper
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-2 rounded-full bg-zinc-900 border border-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto pr-1 my-4 space-y-4 text-xs leading-relaxed text-zinc-300">
          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/10">
            <div className="flex items-center space-x-2 text-white font-bold text-sm mb-2">
              <Lock className="w-4 h-4 text-[#CCFF00]" />
              <span>1. Zero Model Retention Policy</span>
            </div>
            <p className="text-zinc-400">
              Avenora AI enforces strict tenant data partitioning. Your code, meeting transcripts, Jira epics, and operational metadata are never cached, leaked, or used to train or refine foundational machine learning models.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/10">
            <div className="flex items-center space-x-2 text-white font-bold text-sm mb-2">
              <ShieldCheck className="w-4 h-4 text-[#CCFF00]" />
              <span>2. SOC 2 Type II &amp; ISO 27001 Controls</span>
            </div>
            <p className="text-zinc-400">
              Our controls are independently audited annually across Security, Confidentiality, and Availability trust service criteria. Continuous automated compliance monitoring ensures unbroken compliance status.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/10">
            <div className="flex items-center space-x-2 text-white font-bold text-sm mb-2">
              <FileText className="w-4 h-4 text-[#CCFF00]" />
              <span>3. Cryptographic Enclaves &amp; CMEK</span>
            </div>
            <p className="text-zinc-400">
              All data at rest is encrypted using AES-256 with keys managed via AWS KMS or Azure Key Vault. Customers with heightened regulatory demands may bring their own Customer-Managed Keys (CMEK).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/10">
            <div className="flex items-center space-x-2 text-white font-bold text-sm mb-2">
              <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
              <span>4. Enterprise SSO &amp; SCIM Provisioning</span>
            </div>
            <p className="text-zinc-400">
              Support for Okta, Azure Active Directory, and SAML 2.0 IdPs. Granular Role-Based Access Controls (RBAC) restrict portfolio visibility by department and project security clearance.
            </p>
          </div>
        </div>

        {/* Action Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-zinc-400 text-[11px] font-mono">
            {downloaded ? (
              <span className="text-[#CCFF00] flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Downloaded Summary Successfully</span>
              </span>
            ) : (
              <span>Document Ref: AVN-SEC-2026-v2.4</span>
            )}
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full text-xs font-semibold bg-zinc-900 border border-white/20 text-white hover:bg-zinc-800 transition-colors flex items-center justify-center space-x-2"
            >
              <Download className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span>Download Summary</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestAccess();
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full text-xs font-semibold bg-[#CCFF00] text-black hover:bg-[#b8e600] transition-colors"
            >
              Request Full Audit Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
