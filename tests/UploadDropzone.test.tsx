import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { UploadDropzone } from "@bytescale/upload-widget-react/UploadDropzone";
import { act } from "react-dom/test-utils";

(global as any).ResizeObserver = require("resize-observer-polyfill");
configure({ adapter: new Adapter() });

describe("UploadDropzone Component", () => {
  test("Renders the Uploader component inline", async () => {
    await act(async () => {
      const html = mount(<UploadDropzone options={{ apiKey: "free" }} />, { attachTo: document.body });
      await tick();
      expect(html.html()).toContain("Upload a File");
    });
  });
});

async function tick(): Promise<void> {
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
}
