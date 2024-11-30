"use client";

import { Button, Dialog, DialogPanel } from "@tremor/react";
import Link from "next/link";
import React from "react";

function DownloadCV() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button
        className="ml-2 block cursor-pointer border-0 bg-principal-color font-medium ring-2 ring-blue-300 transition-all duration-200 hover:bg-white hover:text-principal-color hover:ring-principal-color"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Download - Descargar CV
      </Button>
      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel>
          <h3 className="text-3xl font-semibold text-text-color">
            Download - Descarga CV
          </h3>
          <div className="flex flex-col items-center">
            <div className="mt-5 flex h-auto w-full justify-center">
              <Link
                className="mr-4 rounded-lg bg-principal-color p-2 font-light text-white ring-2"
                href={"/MichaelPosadaCV_EnEspañol.pdf"}
              >
                English CV
              </Link>
              <a
                href="/MichaelPosadaCV_EnEspañol.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-principal-color p-2 font-light text-white ring-2"
              >
                Español CV
              </a>
            </div>
            <Link
              className="mt-4 rounded-lg bg-white p-2 font-light text-text-color ring-2 ring-text-color"
              href={"/"}
            >
              Certificates - Certificados
            </Link>
          </div>
          <Button
            className="mt-8 w-full border-0 bg-white text-principal-color ring-2 ring-principal-color transition-all duration-200 hover:bg-white"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Done
          </Button>
        </DialogPanel>
      </Dialog>
    </>
  );
}

export default DownloadCV;
