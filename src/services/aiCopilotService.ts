import { ChatMessage } from '../types';

export async function queryAICopilot(prompt: string): Promise<string> {
  const normalized = prompt.toLowerCase().trim();

  // Simulate realistic network latency for enterprise feel
  await new Promise((resolve) => setTimeout(resolve, 600));

  if (normalized.includes('immediate attention') || normalized.includes('priority') || normalized.includes('urgent')) {
    return `Based on the available operational records, the following items should be reviewed:

1. 3 critical complaints (HVAC temp fluctuation Level 4, Elevator #2 sensor, Server room conduit seepage)
2. 2 overdue maintenance tasks (Fire Extinguisher compliance check & Annual AHU sensor test)
3. 1 critical snag (SN-1042: Water leakage Block A / Level 3)
4. 2 inventory items below minimum stock (AHU Filters AF-M13 and Smoke Sensors DET-SMK)

These are recommendations based on the available data.`;
  }

  if (normalized.includes('complaint') || normalized.includes('ticket')) {
    return `Operational Complaint Summary:
• Total Open: 24 active complaints
• Critical: 3 urgent issues requiring lead engineering intervention
• High / Medium: 15 items in active dispatch
• Resolution Rate: 91.4% within SLA target window
• Immediate focus: CMP-2041 (AC fluctuation 4th floor) and CMP-2043 (Water seepage near Server Room).`;
  }

  if (normalized.includes('snag')) {
    return `Snag punch-list report:
• Critical Snag #SN-1042: Water leakage near service area (Block A / Level 3) is currently 'In Progress' with the plumbing team. Due today.
• 5 other localized snags recorded across Tower B finishing works.
• 3 photo evidence attachments logged and awaiting supervisor QA verification.`;
  }

  if (normalized.includes('maintenance') || normalized.includes('pm') || normalized.includes('preventive')) {
    return `Preventive Maintenance Forecast:
• Due Today: AHU Maintenance (AHU-042) - Quarterly Coil Clean & Belt Check (Assigned to Arun Kumar).
• Due Tomorrow: Generator Inspection (DG-02) - Coolant & battery testing.
• Due in 3 Days: Fire Pump Service (FP-01) - Pressure switch & diesel cranking test.
• All scheduled tasks have automated job cards dispatched.`;
  }

  if (normalized.includes('inventory') || normalized.includes('stock') || normalized.includes('store')) {
    return `Store & Inventory Risk Assessment:
• LOW STOCK ALERT: AHU Air Filter (MERV 13). On-hand: 8 boxes | Minimum required: 10 boxes. Recommended replenishment: 20 boxes.
• LOW STOCK ALERT: Optical Smoke Sensor Head. On-hand: 3 units | Minimum: 8 units. (3 units currently reserved).
• All 12 critical lubricants and electrical supplies remain at healthy buffer levels.`;
  }

  if (normalized.includes('summary') || normalized.includes('overview') || normalized.includes('today')) {
    return `Daily Facility Operational Summary:
• Health Index: 96.2% operational readiness across all blocks
• Work Orders: 38 active (18 in execution, 12 assigned, 8 pending sign-off)
• Open Complaints: 24 (3 critical, 21 routine)
• Inspections: 9 scheduled today, 1 non-compliance finding detected in Sector 3 (Fire extinguisher inspection tag overdue)
• AI Advisory: Prioritize cooling recalibration on Level 4 before ambient heat peak at 2:00 PM.`;
  }

  return `Based on live records in the NexgenOps operational registry:
• System status: 12 facilities monitored, 38 active work orders, 24 open complaints.
• All signals are logged with audit timestamps and SLA tracking.
• For detailed analytics, explore the Complaints, Snags, Preventive Maintenance, and Inventory modules on the dashboard.`;
}
