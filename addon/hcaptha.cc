#include <node.h>
#include "cap.h"

using namespace v8;

void Init(Handle<Object> target) {
  target->Set(String::NewSymbol("create"),
              FunctionTemplate::New(cap::create)->GetFunction());
}

NODE_MODULE(hcaptha, Init);