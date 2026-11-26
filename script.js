document.addEventListener("DOMContentLoaded", () => {
  // 1. Home: Mealtime Trend Simulator
  const simTabs = document.querySelectorAll("[data-sim]");
  const simCard = document.getElementById("sim-box");
  if (simTabs.length > 0 && simCard) {
    const simStates = {
      baseline: {
        cls: "",
        stability: "Aligned with personal signature",
        contact: "Verified skin contact",
        queue: "Routine log",
        copy: "Swallow timing, neck movement, and contact vibration match this resident's calibrated baseline across recent meals."
      },
      drift: {
        cls: "is-drift",
        stability: "Recurring evening shift",
        contact: "Verified skin contact",
        queue: "Priority review",
        copy: "Repeated timing/duration shifts across recent evening meals paired with logged fatigue—surfaced for caregiver check and clinician review."
      },
      contact: {
        cls: "is-contact",
        stability: "Paused for fit check",
        contact: "Collar shift / low confidence",
        queue: "Check neckband fit",
        copy: "Signal-quality filter detected loose contact or collar movement—adjust fit/liner before reading trends."
      }
    };

    const outStability = document.getElementById("sim-stability");
    const outContact = document.getElementById("sim-contact");
    const outQueue = document.getElementById("sim-queue");
    const outCopy = document.getElementById("sim-copy");

    simTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        simTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const state = simStates[tab.dataset.sim];
        if (!state) return;

        simCard.classList.remove("is-drift", "is-contact");
        if (state.cls) simCard.classList.add(state.cls);
        if (outStability) outStability.textContent = state.stability;
        if (outContact) outContact.textContent = state.contact;
        if (outQueue) outQueue.textContent = state.queue;
        if (outCopy) outCopy.textContent = state.copy;
      });
    });
  }

  // 2. Technology: Signal & Calibration Switcher
  const techTabs = document.querySelectorAll("[data-tech]");
  if (techTabs.length > 0) {
    const techModes = {
      calibration: {
        kicker: "01 · PERSONAL BASELINE",
        title: "Personal Mealtime Signature",
        copy: "Captures individual signal strength, vibration shape, event timing, duration, and meal rhythm during supervised calibration so changes are judged relative to the person.",
        m1: "Baseline: Individualized",
        m2: "Comparison: Relative drift"
      },
      filter: {
        kicker: "02 · ARTIFACT & CONTACT FILTER",
        title: "Separating Motion & Contact Drops",
        copy: "Cross-checks neck signals against head/body inertial motion and contact confidence to filter speaking, walking, head turns, and collar movement.",
        m1: "Motion gating: Active",
        m2: "Contact check: Continuous"
      },
      trends: {
        kicker: "03 · LONGITUDINAL COMPARISON",
        title: "Meal-to-Meal & Time-of-Day Trends",
        copy: "Looks for recurring shifts across meals and days—alongside texture, liquid thickness, posture, and fatigue notes—rather than isolated one-off blips.",
        m1: "Window: Multi-meal",
        m2: "Context: Caregiver paired"
      }
    };

    const tKicker = document.getElementById("tech-kicker");
    const tTitle = document.getElementById("tech-title");
    const tCopy = document.getElementById("tech-copy");
    const tM1 = document.getElementById("tech-m1");
    const tM2 = document.getElementById("tech-m2");

    techTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        techTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const m = techModes[tab.dataset.tech];
        if (!m || !tKicker || !tTitle || !tCopy || !tM1 || !tM2) return;

        tKicker.textContent = m.kicker;
        tTitle.textContent = m.title;
        tCopy.textContent = m.copy;
        tM1.textContent = m.m1;
        tM2.textContent = m.m2;
      });
    });
  }

  // 3. Workflow: 7-Step Care & Review Simulator
  const stepTabs = document.querySelectorAll("[data-step]");
  if (stepTabs.length > 0) {
    const workflowSteps = [
      {
        idx: "STEP 01 / 07",
        title: "Observe Ordinary Meals",
        copy: "Discreet neckband records neck movement, skin-conducted contact vibration, and head/body motion across everyday meals.",
        who: "Resident wearer & care team"
      },
      {
        idx: "STEP 02 / 07",
        title: "Build Personal Mealtime Signature",
        copy: "Supervised calibration models the resident's individual signal shape, timing, duration, and meal rhythm.",
        who: "Care team & calibration setup"
      },
      {
        idx: "STEP 03 / 07",
        title: "Filter Motion & Contact Artifacts",
        copy: "Cross-references neck signals with body movement and contact reliability to filter speaking, walking, head turns, and strap shifts.",
        who: "Multimodal signal filter"
      },
      {
        idx: "STEP 04 / 07",
        title: "Compare Longitudinal Patterns",
        copy: "Evaluates multi-meal persistence, timing/duration drift, cough or throat-clearing proximity, and time-of-day shifts.",
        who: "Longitudinal trend engine"
      },
      {
        idx: "STEP 05 / 07",
        title: "Add Mealtime Context",
        copy: "Pairs sensor trends with meal period, food texture, liquid consistency, posture, fatigue, or illness notes.",
        who: "Caregivers & ward nurses"
      },
      {
        idx: "STEP 06 / 07",
        title: "Summarize for Caregivers",
        copy: "Condenses meal data into clear status summaries covering pattern stability, contact reliability, and shift clustering.",
        who: "Ward & caregiver view"
      },
      {
        idx: "STEP 07 / 07",
        title: "Prioritize Clinical Review",
        copy: "Surfaces structured review summaries when persistent deviations appear so nurses, SLPs, and rehab staff focus attention efficiently.",
        who: "Nurses, SLPs & rehab teams"
      }
    ];

    const wIdx = document.getElementById("wf-idx");
    const wTitle = document.getElementById("wf-title");
    const wCopy = document.getElementById("wf-copy");
    const wWho = document.getElementById("wf-who");

    stepTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        stepTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const step = workflowSteps[Number(tab.dataset.step)];
        if (!step || !wIdx || !wTitle || !wCopy || !wWho) return;

        wIdx.textContent = step.idx;
        wTitle.textContent = step.title;
        wCopy.textContent = step.copy;
        wWho.textContent = step.who;
      });
    });
  }

  // 4. Impact: Facility Bed & Meal Window Estimator
  const bedInput = document.getElementById("bed-range");
  if (bedInput) {
    const outBeds = document.getElementById("est-beds");
    const outMeals = document.getElementById("est-meals");
    const outFund = document.getElementById("est-fund");

    const syncEstimate = () => {
      const beds = Number(bedInput.value) || 30;
      if (outBeds) outBeds.textContent = `${beds} beds`;
      if (outMeals) outMeals.textContent = `~${beds * 3} meal windows / day`;
      if (outFund) outFund.textContent = "HK IT Fund (RCHE / Rehab)";
    };

    bedInput.addEventListener("input", syncEstimate);
    syncEstimate();
  }

  // 5. Contact: Inquiry Form
  const form = document.getElementById("inquiry-form");
  if (form) {
    const notice = document.getElementById("inquiry-notice");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("in-name")?.value.trim() || "Guest";
      const email = document.getElementById("in-email")?.value.trim() || "";
      const topic = document.getElementById("in-topic")?.value || "General";
      const msg = document.getElementById("in-msg")?.value.trim() || "";

      if (notice) {
        notice.style.display = "block";
        notice.innerHTML = `<strong>Prepared (${topic}):</strong> From <em>${name}</em> (${email}) — "${msg}". Connect Formspree, EmailJS, or your mail endpoint to send live.`;
      }
      form.reset();
    });
  }
});