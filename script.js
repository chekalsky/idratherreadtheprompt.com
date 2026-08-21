(() => {
  const button = document.getElementById("copy-link");
  const fallback = document.getElementById("copy-fallback");
  const input = document.getElementById("page-url");
  const live = document.getElementById("copy-status");

  if (!button) return;

  const idleLabel = button.dataset.idle || "Copy link to send it to someone";
  const copiedLabel = button.dataset.copied || "Copied";
  let resetTimer = 0;

  const url = () => window.location.href;

  const announce = (message) => {
    if (!live) return;
    live.textContent = "";
    window.requestAnimationFrame(() => {
      live.textContent = message;
    });
  };

  const showFallback = () => {
    if (!fallback || !input) return;
    input.value = url();
    fallback.hidden = false;
    input.focus();
    input.select();
    announce("Select and copy the link");
  };

  const setCopiedState = () => {
    button.textContent = copiedLabel;
    button.classList.add("is-copied");
    announce(copiedLabel);
    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => {
      button.textContent = idleLabel;
      button.classList.remove("is-copied");
      announce("");
    }, 1600);
  };

  const copyWithClipboard = async () => {
    await navigator.clipboard.writeText(url());
    setCopiedState();
  };

  const copyWithExecCommand = () => {
    if (!input) return false;
    input.value = url();
    if (fallback) fallback.hidden = false;
    input.focus();
    input.select();
    const ok = document.execCommand("copy");
    if (ok) setCopiedState();
    return ok;
  };

  button.addEventListener("click", async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await copyWithClipboard();
        return;
      }
      if (!copyWithExecCommand()) showFallback();
    } catch {
      if (!copyWithExecCommand()) showFallback();
    }
  });
})();
